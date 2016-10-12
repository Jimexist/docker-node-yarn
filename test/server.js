const express = require('express')
const app = express()

app.get('/', (req, res) => res.json({
  hello: 'world'
}))

app.listen(3000, err => {
  if (err) {
    process.exit(-1)
  }
  console.log('running at 3000')
})
