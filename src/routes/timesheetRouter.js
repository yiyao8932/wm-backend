import Router from 'koa-router';
import { getLatestEntry, postEntry } from '../controller/timesheetController';

const router = new Router();

router.get('/entry/:workerId', async (ctx) => {
    try {
        ctx.body = await getLatestEntry(ctx.params);
    } catch (error) {
        ctx.status = 400;
        ctx.body = error.message;
    }
});

router.post('/entry', async (ctx) => {
    try {
        ctx.body = await postEntry(ctx.request.body);
    } catch (error) {
        ctx.status = 400;
        ctx.body = error.message;
    }
});

export default router;