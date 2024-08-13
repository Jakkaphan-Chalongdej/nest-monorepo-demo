import { config } from 'dotenv';
import { join } from 'path';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

config();

const devDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [join('dist/libs/core', '**', 'entities', '*.entity{.ts,.js}')],
  migrations: [join('dist/migrations', '*{.ts,.js}')],
  migrationsTableName: 'migrations',
  logging: true,
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
});

export default devDataSource;
