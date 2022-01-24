const koa = require("koa");
const cors = require("@koa/cors");
const serve = require("koa-static");

const app = new Koa();

app.use(cors()).use(serve("./images")).use(router.routes());

app.listen(process.env.PORT || 3000);
