// const datos = require('./datos')
// datos('hola mundo')
// //console.log(module);

// console.log(__filename);
// console.log(__dirname);


const path = require('path')

const objPath = path.parse(__filename)
console.log(objPath);

const os = require('os')
let memoriaLibre = os.freemem()
let memoriaTotal = os.totalmem()

console.log(memoriaLibre);
console.log(memoriaTotal);

const fs = require('fs')

const archivos = fs.readdirSync('./')
console.log(archivos);

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);

    else console.log('resultado', files);
})

const EventEmitter = require('events')

const emitter = new EventEmitter()

//Registrar el listenar

emitter.on('mensaje_logger', function(){
    console.log('Listener llamado');
})

//Registrar evento

emitter.emit('mensaje_logger', {id: 1, url:'htpp://prueba.com'})


////////////////////////////////////////////////////////

const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hola mundo')
        res.end()
    }

    if (req.url === '/api/productos')
    res.write(JSON.stringify(['mouse', 'teclado', 'parlante']))
    res.end()
})

server.on('connection', (puerto) => {
    console.log('Nueva conexion');
})

server.listen(3000)
console.log('servisor escuchando en el puerto 3000');