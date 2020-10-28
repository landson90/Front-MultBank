const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + 'dist/MultBank-spa'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + 'dist/MultBank-spa/index.html')
})

app.listen(PORT, () => {
  console.log('Servidor start na porta ' + PORT)
})
