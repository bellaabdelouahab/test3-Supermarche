const express = require('express');
const venteRoutes = require('./routes/venteRoutes');
const cors = require( 'cors' );
const path = require('path')

const app = express();

// ============= middlewares ==================
app.use(express.static(path.resolve(__dirname, '../reactjs/build')));

app.use( cors() ); // controler l'acces a l'API

app.use('/api', venteRoutes) //Routes de vente

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../reactjs/build', 'index.html'));
});

module.exports = app;