import express from 'express';
// const bodyParser = require('body-parser')
import path from 'path';
const app = express();
const rootDir = path.resolve();
app.use(express.static(path.join(rootDir, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  console.log(path.resolve());
  res.sendFile(path.join(rootDir, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3001);