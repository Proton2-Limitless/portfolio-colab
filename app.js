const express = require('express')
const app = express()
const path = require("path")
const quotes = require("./util")

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/load-quote", (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  // console.log(randomQuote)
  res.json(randomQuote)

})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app