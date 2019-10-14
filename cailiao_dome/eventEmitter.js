const events = require('events');
const eventEmitter = new events.EventEmitter;

eventEmitter.on('some_event',() => {
    console.log('触发some_enent事件1')
})
eventEmitter.on('some_event',() => {
    console.log('触发some_enent事件2')
})
setTimeout(() => {
    eventEmitter.emit('some_event')
},2000)