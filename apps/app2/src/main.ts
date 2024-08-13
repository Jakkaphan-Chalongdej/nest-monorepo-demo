import { HttpExceptionFilter } from '@app/utils/exceptions/http-exception';
import { TransformInterceptor } from '@app/utils/interceptors/http-interception';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { App1Module } from 'apps/app1/src/app1.module';
import { json, urlencoded } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(App1Module, {
    bufferLogs: true,
  });
  const config = app.get(ConfigService);
  app.setGlobalPrefix(config.get<string>('app.prefixApi'));
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  //Document
  const options = new DocumentBuilder()
    .setTitle('App 1')
    .setVersion('1.0')
    .addBearerAuth({ in: 'headers', type: 'http' })
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  app.use(helmet());
  app.use(morgan('tiny'));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      disableErrorMessages: config.get<boolean>('app.isProduction'),
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.set('trust proxy', 1);
  app.use(json({ limit: '15mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.enableCors({
    credentials: true,
    origin: (origin, callback) => {
      return callback(null, true);
    },
    methods: 'GET,PUT,POST,DELETE,PATCH',
  });

  await app.listen(config.get<number>('app.port'));
  console.log(`Application is running on: ${await app.getUrl()}/api/docs`);
}
bootstrap();
