const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '..', 'dist')))

app.get('/*', function (_, res) {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Welcome to AXEN')
})
