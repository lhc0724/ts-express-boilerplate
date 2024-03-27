import "reflect-metadata";
import dotenv from 'dotenv'
import { DataSource } from 'typeorm';
import { User } from './src/models';

dotenv.config();
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DBNAME, NODE_ENV } =
  process.env;

console.log(DB_HOST);

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: parseInt(DB_PORT || "3306"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DBNAME,

  synchronize: NODE_ENV === "dev" ? false : false,
  logging: NODE_ENV === "dev" ? false : false,
  entities: [User],
  migrations: [__dirname + "/migrations/*.ts"],
  subscribers: [],
});
