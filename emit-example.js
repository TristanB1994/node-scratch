const { EventEmitter } = require('events')

const ee = new EventEmitter()

ee.on('my-event', () => { console.log('1') } )
ee.prependListener('my-event', () => { console.log('2') } )
ee.emit('my-event')
// events emitted without a registered handler throw an error
// ee.on('error', () => { console.log('error event handler') } )
ee.emit('error')

