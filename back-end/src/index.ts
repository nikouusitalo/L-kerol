const Koa = require('koa');
const app = new Koa();

app.use(async (ctx: { body: string; }) => {
  ctx.body = 'Hello World';
});

app.listen(6969);