const http = require('http');


const PORT = 8080;


const server = http.createServer((request, response) => {
    response.end("Mi primer `Hola Mundo` usando el modulo nativo HTTP de NODE_JS!!")
})


server.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})