/* app.ts */
import "reflect-metadata"
import express from 'express';
import dotenv from 'dotenv'
import router from './src/routes'
import { AppDataSource } from "./data-source";

dotenv.config();

const app = express();
const port = process.env.EXPRESS_PORT || 5000;

//middleware setup
app.use(express.json());

AppDataSource.initialize().catch(err => {
  console.log(err);
});

app.use('/api', router);

//server start
app.listen(port, () => {
  console.log('server starting... ' + port);
});
