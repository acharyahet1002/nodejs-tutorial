const EventEmitter = require('events')

const customEmmiter = new EventEmitter()

//on - listen
//emit - emit event

customEmmiter.on('response', (name, id) => {
  console.log(`Data Receieved Name: ${name}, Id:${id}`)
})

customEmmiter.on('response', () => {
  console.log('second call')
})

// customEmmiter.emit('response')

customEmmiter.emit('response', 'john', 23)
