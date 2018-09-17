const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

// $ GET /package.json
app.use(serve('../client/dist'));

app.listen(80);

console.log('listening on port 80');
