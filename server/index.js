const Koa = require('koa');
const CORS = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const jwt = require('koa-jwt');
const logger = require('koa-logger');

const mountRouters = require('./routes/');
const jwtErrorHandle = require('./middlewares/jwtErrorHandle');
const {
  CORSConfig,
  serverConfig: { port },
  jwtSecret
} = require('./config/');

const app = new Koa();

//cors
app.use(CORS(CORSConfig));

//logger
app.use(logger());

//bodyParser
app.use(bodyParser());

//jwt
app
  .use(jwtErrorHandle)
  .use(jwt({ secret: jwtSecret }).unless({ path: [/^\/public/] }));

//router
mountRouters(app);

app.listen(port, () => {
  console.log(`server started in ${port}`);
});
