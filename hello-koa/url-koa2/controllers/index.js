const koa = require('koa');
cosnt app = new koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser')


const fn_index = async (ctx,next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>name:<input /></p>
        </form>`
}