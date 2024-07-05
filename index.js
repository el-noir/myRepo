require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000  // Use the environment variable PORT, or default to 3000 if not set

const githubData = {
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest",
  "status": "404"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Mudasir Shah')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please Login</h1>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)  // Correctly use the 'port' variable here
})
