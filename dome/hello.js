const hello = () => {
    process.nextTick(()=>{
        console.log('meijieya')
    })
    console.log('meijie'+'yangsiqi')
}

module.exports = hello;