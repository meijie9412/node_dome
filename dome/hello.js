// const hello = () => {
//     process.nextTick(()=>{
//         console.log('meijieya')
//     })
//     console.log('meijie'+'yangsiqi')
// }

// module.exports = hello;

const hello = () => {
    process.nextTick(() => {
        console.log('1')
    });
    console.log('2');
}

module.exports = hello;