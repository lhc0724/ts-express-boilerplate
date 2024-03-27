/* app.ts */
import express from 'express';

import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = 5000 || process.env.EXPRESS_PORT;

//middleware setup
app.use(express.json());

//server start
app.listen(port, () => {
  console.log('server starting... ' + port);
});
