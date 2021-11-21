
const http=require('http');

const manejador = function(solicitud, respuesta){
	console.log("Recibimos un console log");
	respuesta.end("Hola Mundo");
}

const servidor = http.createServer(manejador);

servidor.listen(8080);