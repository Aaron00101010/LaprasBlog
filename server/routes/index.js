const routerGather = require('../utils/routerGather');

function mountRouters(app) {
  const routersList = routerGather(__dirname);
  routersList
    .then(function(routersList) {
      routersList.forEach(router => {
        app.use(router.routes());
      });
    })
    .catch(function(err) {
      console.log(err);
    });
}

module.exports = mountRouters;
