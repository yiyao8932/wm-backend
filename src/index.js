import Koa from 'koa';
import timesheetRouter from './routes/timesheetRouter';
import bodyParser from 'koa-body';
import cors from '@koa/cors';
import dotenv from 'dotenv';
dotenv.config();

let PORT = process.env.PORT || 4000;
const app = new Koa();
app.use(bodyParser());
app.use(cors());

app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = err.message;
      ctx.app.emit('error', err, ctx);
    }
  });

app.use(timesheetRouter.routes())
app.use(timesheetRouter.allowedMethods());

app.listen(PORT);
console.log("Listening at port: " + PORT);

export default app;