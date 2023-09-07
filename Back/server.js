require('dotenv').config();
const http = require('http'); //conexion HTTP
const app = require('./index');//referencia al archivo index 
const server = http.createServer(app);
server.listen(process.env.PORT);//Conexion con el puerto 80 en el archivo .env