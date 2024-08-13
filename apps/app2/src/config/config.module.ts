import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import AppConfig from './app.config';
import DatabaseConfig from './database.config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env${
        process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''
      }`,
      load: [
        () => ({ database: DatabaseConfig() }),
        () => ({ app: AppConfig() }),
      ],
      validationSchema: Joi.object({
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
        DB_LOGGING: Joi.boolean().default(false),
        DB_MIGRATIONS_RUN: Joi.boolean().default(false),
      }),
    }),
  ],
})
export class ConfigModule {}
