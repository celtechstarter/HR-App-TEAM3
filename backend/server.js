const express = require ("express");
const app = express();
const cors = require ('cors');


const connection = require('./mysql'); // Pfad zu mysql-connect.js
const bodyParser = require('body-parser');
const { authenticateUser } = require('./auth'); // Passe den Pfad zu auth.js an
const router = require('./routes/route');



var SERVER_URL_PUBLIC = "http://127.0.0.1";

const PORT = 3001;
const IMAGE_PATH_PUBLIC = "/images/personal/";

var public_image_path = `${SERVER_URL_PUBLIC}:${PORT}${IMAGE_PATH_PUBLIC}`;

 /* //update public url
  var userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress ||  null;
  SERVER_URL_PUBLIC = req.protocol + "://"+  req.get('host');
  public_image_path = `${SERVER_URL_PUBLIC}${IMAGE_PATH_PUBLIC}`;
  console.log( `Request from [${userIP}] on [${SERVER_URL_PUBLIC}]`);
*/

// Middleware für JSON-Parser
app.use(bodyParser.json());

//Frontend-Verbindung ermöglichen
app.use(cors());
//Aufruf für JSON u. API (body)
app.use(express.json());
app.use(express.static('public')); // Public ordenr einbinden


// Verwende die API-Routen unter /api
app.use('/', router);

// Server starten
app.listen(PORT, () => {
    console.log(`Der Server läuft auf ${SERVER_URL_PUBLIC}:${PORT}`) // `` -> backticks
})