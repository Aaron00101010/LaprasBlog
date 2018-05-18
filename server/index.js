const Koa = require('koa');
const CORS = require('koa-cors');
const bodyParser = require('koa-bodyparser');

const mountRouters = require('./routes/');
const {
  CORSConfig,
  serverConfig: { port }
} = require('./config/');

const app = new Koa();

mountRouters(app);

app.use(CORS(CORSConfig)).use(bodyParser());

app.listen(port, () => {
  console.log(`server started in ${port}`);
});
