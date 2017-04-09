const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));

// routes
const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

// start the server
app.listen(port, () => {
  console.log('Server is running on http://localhost:' + port + ' or http://127.0.0.1:' + port);
});