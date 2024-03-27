/* app.ts */
import express from 'express';
import dotenv from 'dotenv'
import router from './src/routes'

dotenv.config();

const app = express();
const port = process.env.EXPRESS_PORT || 5000;

//middleware setup
app.use(express.json());

app.use('/api', router);

//server start
app.listen(port, () => {
  console.log('server starting... ' + port);
});
