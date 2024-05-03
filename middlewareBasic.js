// const express = require('express')
// const app = express()

// const logger = (req, res, next) => {
//   const method = req.method
//   const url = req.url
//   const time = new Date().getFullYear()
//   console.log(method, url, time)
//   next() //pass onto next middleware or terminate here
// }

// app.get('/', logger, (req, res) => {
//   // res.json(products)

//   res.send('<h1>Home Page</h1>')
// })

// app.get('/about', logger, (req, res) => {
//   // res.json(products)
//   res.send('<h1>About Page</h1>')
// })

// app.listen(5000, () => {
//   console.log('The Server is litening on port 5000')
// })

const express = require('express')
const app = express()
const logger = require('./logger')

app.use(logger) // for specific path -> app.use("./path-to-apply", logger)

app.get('/', (req, res) => {
  // res.json(products)

  res.send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
  // res.json(products)
  res.send('<h1>About Page</h1>')
})

app.listen(5000, () => {
  console.log('The Server is litening on port 5000')
})
