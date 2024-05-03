const express = require('express')
// const path = require('path')
const app = express()
const { products, people } = require('./productsData.js')

app.get('/', (req, res) => {
  // res.json(products)
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })
  res.json(newProducts)
})

app.get('/api/products/:id', (req, res) => {
  let { id } = req.params
  const singleProduct = products.find((product) => product.id === Number(id))
  if (!singleProduct) {
    return res.status(404).send('Product Does not Exist!')
  }
  res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
  console.log(req.params) //{ productId: '1', reviewId: '3' }

  res.status(200).send('Hello World!')
})

app.get('/api/v1/query', (req, res) => {
  console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]
  sortedProducts
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('No products matched your search')
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('The Server is litening on port 5000')
})
