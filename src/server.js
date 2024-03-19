import express  from 'express';
import configViewEngine from './configs/viewsEngine';
import initWebRoute from './route/web';
import connection from './configs/connectDB'

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//setup view engine
configViewEngine(app);

//init web
initWebRoute(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})