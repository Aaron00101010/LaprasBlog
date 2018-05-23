const jsonwebtoken = require('jsonwebtoken');
const { jwtSecret } = require('../config');

module.exports = async function(ctx, next) {
  const auth = ctx.get('Authorization');
  const token = auth.match(/Bearer\s+(.+)/)[1];

  jsonwebtoken.verify(token, jwtSecret, function(err, decode) {
    if (typeof decode === 'undefined') {
      ctx.throw(401, err);
    }
  });

  await next();
};
