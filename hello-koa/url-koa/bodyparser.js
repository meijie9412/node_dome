const koa = require('koa');
const app = new koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

router.get('/', async (ctx,next) => {
    ctx.response.body=`<h1>index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa" /></p>
            <p>Password: <input name="password" type="password" /></p>
            <p><input value="submit" type="submit" /></p>
        </form>`;
})

router.post('/signin',async (ctx,next) => {
    const name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
    console.log(`name:${name} ,password:${password}`);
    if(name=="meijie"&&password=="123456"){
        ctx.response.body=`<h1>welcome ${name}</h1>`;
    }else{
        ctx.response.body=`<h1>signin failed</h1>
        <p><a href="/">try again</a></p>`
    }
})

app.use(router.routes());

app.listen(3000)

console.log('app started at port 3000...');