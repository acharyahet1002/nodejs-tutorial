const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({ extended: false }))

//parse json
app.use(express.json())

//parse json
app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('The Server is litening on port 5000')
})
