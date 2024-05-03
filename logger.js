const logger = (req, res, next) => {
  //can be moved into differet file as well
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next() //pass onto next middleware or terminate here
}

module.exports = logger
