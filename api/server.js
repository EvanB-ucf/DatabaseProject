// Set up express 
const express = require('express');
const app = express();
const appPort = 3001; // React typically runs on 3000
const cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Include routes 
app.use(require('./controllers'));

app.listen(appPort);
console.log(`server started on port ${appPort}`);