# LaprasBlog

基于 Vue2.x+Koa2+Mysql 开发的简易 blog，评论插件使用 DISQUS，权限验证使用 jwt(JSON Web Token)。Node 版本 8.11.3。

## 客户端

![客户端](https://ws1.sinaimg.cn/large/e3c02d6fly1fteeqsioqsj20o70qztc3.jpg)

## 后台

![后台](https://ws1.sinaimg.cn/large/e3c02d6fly1fteeqsjv98j21h10qj45w.jpg)

# 快速启动

### 客户端

```bash
cd client && npm i
```

配置文件`src/config/config.js`：

```js
//使用DISQUS作为评论插件，配置注册插件URL
const disqusURL = 'https://aaron00101010-2.disqus.com/embed.js';
//服务端API地址
const apiServer = 'http://localhost:8527';

export { disqusURL, apiServer };
```

其他命令：参见`package.json`

### 后台

```bash
cd admin && npm i
```

配置文件`src/config/config.js`：

```js
//服务端API地址
const apiServer = 'http://localhost:8527';

export { apiServer };
```

其他命令：参见`package.json`

### 服务端

```bash
cd server && npm i
```

配置文件`src/config/config.js`：

```js
//MySql配置
const databaseConnectConfig = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  multipleStatements: true
};
//数据库名称
const databaseName = {
  database: 'blog'
};
//启动端口
const serverConfig = {
  port: 8527
};
//CORS设置
const CORSConfig = {
  maxAge: 7 * 24 * 60 * 60,
  credentials: true,
  methods: 'GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE',
  headers: 'Content-Type, Accept, Authorization'
};

//设置jwt加密密匙，建议修改
const jwtSecret = 'Koa';

//文章预览字符长度，也可以在文章中使用<!-- more -->设置预览分界线
const articalConfig = {
  previewTextLength: 150
};

module.exports = {
  databaseName,
  databaseConnectConfig,
  CORSConfig,
  serverConfig,
  jwtSecret,
  articalConfig
};
```

初始化数据库：

```bash
cd utils && node initdb.js
```

其他命令：参见`package.json`
