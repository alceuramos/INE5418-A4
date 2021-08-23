const Hapi = require('hapi');
 
const host = 'localhost';
const port = 3000; 
 
const server = Hapi.Server({
    host: host,
    port: port
});
 
const init = async () => {
 
    await server.start();
    console.log("Server UP no porto: " + port);
 
}
 
//Definir routes
require('./routes/routes')(server);
 
init();