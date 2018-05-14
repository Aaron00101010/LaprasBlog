const databaseConnectConfig = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  multipleStatements: true
};

const databaseName = {
  database: 'blog'
};

const serverConfig = {
  port: 8527
};

const CORSConfig = {
  maxAge: 7 * 24 * 60 * 60,
  credentials: true,
  methods: 'GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE',
  headers: 'Content-Type, Accept, Authorization'
};

module.exports = {
  databaseName,
  databaseConnectConfig,
  CORSConfig,
  serverConfig
};
