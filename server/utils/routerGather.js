const glob = require('glob');
/**
 *
 *
 * @export {Function} gather routers
 * @param {String} dir
 * @returns {Promise} routerList | ErrorInfo
 */
module.exports = function(dir) {
  return new Promise((res, rej) => {
    const routerList = [];
    glob(`${dir}/*`, { ignore: '**/index.js' }, (err, files) => {
      if (err) {
        rej(error);
      }
      files.forEach(file => {
        const router = require(file);
        routerList.push(router);
      });
      res(routerList);
    });
  });
};
