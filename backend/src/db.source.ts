import * as dotenv from 'dotenv';
dotenv.config();

import { DataSource, DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'e_commerce_db',
  entities: ['./dist/**/*.entity.js'],
  synchronize: false,
  migrations: ['./dist/migrations/*.js'],
  migrationsTableName: 'migrations',
};

const dataSorce = new DataSource(config);
export default dataSorce;
