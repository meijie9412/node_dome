// const koa = require('koa');
// cosnt app = new koa();
// const router = require('koa-router')();
// const bodyParser = require('koa-bodyparser')


const fn_index = async (ctx,next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>name:<input name="name" value="meijie" /></p>
            <p>password:<input name="password" type="password" /></p>
        </form>`;
}

const fn_signin = async (ctx,next) => {
    const name = ctx.request.body.name || "";
    const password = cxt.request.body.password || "";
    if(name=="meijie"&&password=="123456"){
        cxt.response.body=`<h1>welcome ${name}</h1>`
    }else{
        cxt.response.body=`<h1>signin failed</h1>
            <p><a href="/">try again</a></p>`
    }
}

module.exports = {
    'get /':fn_index,
    'post /signin':fn_signin,
}