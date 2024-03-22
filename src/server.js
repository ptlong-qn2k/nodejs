import express from 'express';
import configViewEngine from './configs/viewsEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
// import connection from './configs/connectDB'

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//setup view engine
configViewEngine(app);

//init web
initWebRoute(app);
//init api
initAPIRoute(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})