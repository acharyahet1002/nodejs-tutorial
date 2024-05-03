const express = require('express')
// const path = require('path')
const app = express()
const { products, people } = require('./productsData.js')

app.get('/', (req, res) => {
  res.json(products)
})

app.listen(5000, () => {
  console.log('The Server is litening on port 5000')
})
