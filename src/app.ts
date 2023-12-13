import Koa, { Context } from 'koa';
const app = new Koa()
const port = 4000;

app.use((ctx: Context) => {
    ctx.body = 'Hello, World!';
});

app.listen(port, () => {
    console.log(`[Server] Running at http://localhost:${port}`);
});