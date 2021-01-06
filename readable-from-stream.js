'use strict'
const { Readable } = require('stream')
// option to set config for from after data array object, objectMode: true by default
const readable = Readable.from(['some', 'data', 'to', 'read'], { objectMode: false })
readable.on('data', (data) => { console.log('got data', data) })
readable.on('end', () => { console.log('finished reading') })
