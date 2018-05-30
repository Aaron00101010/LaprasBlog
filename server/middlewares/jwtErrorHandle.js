module.exports = (ctx, next) => {
  return next().catch(err => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        success: false,
        error: 'token 验证失败！'
      };
    } else {
      throw err;
    }
  });
};
