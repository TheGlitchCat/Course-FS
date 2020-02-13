
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event', () => {
    console.log('Event');
})

emitter.emit('event');

emitter.on('Event with arg', (arg) => {
    console.log('Event: ' + arg.id);
})

emitter.emit('Event with arg', {id: 10230});