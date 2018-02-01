const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

const handler = function(ctx) {
    const json =  ctx.request.body
    const dd = json. DASHBOARD
    const PERMISSIONS = dd. PERMISSIONS
    const resData =  mapPermissionName(ctx.request.body)
    ctx.response.type = 'json';
    ctx.response.body = resData
};

app.use(router.post('/permission'), handler)
app.listen(3000);
console.log('app started at port 3000...');