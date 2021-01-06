'use strict'
const { Readable } = require('stream')
const createReadStream = () => {
  const data = ['some', 'data', 'to', 'read']
  return new Readable({
    // default encoding is buffer, 'utf8' reads strings
    // encoding: 'base64',
    // encoding: 'utf8',
    
    // if not using buffers, objectMode should be set to true, defaults to false
    // prevents automatic conversion of send data to a buffer object
    objectMode: true,

    read () {
      if (data.length === 0) this.push(null)
      else this.push(data.shift())
    }
  })
}
const readable = createReadStream()
readable.on('data', (data) => { console.log('got data', data) })
readable.on('end', () => { console.log('finished reading') })
