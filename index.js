const express = require('express');
const port = 3000;

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// start the server
app.listen(port, () => {
  console.log('Server is running on http://localhost:' + port + ' or http://127.0.0.1:' + port);
});