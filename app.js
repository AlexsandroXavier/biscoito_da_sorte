const db = require('./dbConnection')
const express = require('express')

// const db = require('./dbConnection')

const app = express()

const sortes = require('./mockup')

// Configurações do Express
// ---------------------------------------------
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))

// Rotas
// ---------------------------------------------
app.get('/', (req, res) => {

  res.render('index', {sortes: sortes.slice(0,1)})

});

app.get('/admin', (req, res) => {

  res.render('admin/admin')
});

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando com express')
  console.log('Pressione CTRL+C para encerrar')
}); 