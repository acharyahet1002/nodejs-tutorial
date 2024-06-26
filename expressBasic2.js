const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./navbar-app'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource Not Found</h1>')
})

app.listen(5000, () => {
  console.log('The Server is litening on port 5000')
})
