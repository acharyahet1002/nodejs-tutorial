const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

app.use([logger, authorize])

app.get('/', (req, res) => {
  // res.json(products)

  res.send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
  // res.json(products)
  console.log(req.user)
  res.send('<h1>About Page</h1>')
})

app.listen(5000, () => {
  console.log('The Server is litening on port 5000')
})
