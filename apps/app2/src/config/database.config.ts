import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export default () =>
  ({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_DATABASE || 'example',
    logging: process.env.DB_LOGGING === 'true',
    entities: [
      join(
        __dirname,
        '../../../..',
        'libs',
        'core',
        'src',
        'database',
        'entities',
        '*.entity{.ts,.js}',
      ),
    ],
    migrations: [join(__dirname, '..', 'migrations', '*.ts')],
    cli: {
      migrationsDir: join(__dirname, '..', 'migrations'),
    },
    synchronize: process.env.DB_SYNCHRONIZE === 'true',
    migrationsRun: process.env.DB_MIGRATIONS_RUN === 'true',
    namingStrategy: new SnakeNamingStrategy(),
  } as TypeOrmModuleOptions);
