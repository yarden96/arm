const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://requests-managemant.herokuapp.com/');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization, X-Requested-With, X-HTTP-Method-Override, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');

  console.log("request ", req.method, req.originalUrl, req.body);
  
  next();
});

// app.on('ready', () => {
//   mainWindow = new BrowserWindow({
//       webPreferences: {
//           nodeIntegration: true
//       }
//   });
// });

// Express Middleware for serving static files
app.use(express.static(path.join(__dirname)));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/webgl_loader_fbx.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, ()=> {
    console.log('Server running');
})