const debug = require('debug')('app:inicio')
const express = require('express');
const config = require('config')
const morgan = require('morgan')
const usuarios = require('./routes/usuarios')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use('/api/usuarios', usuarios)

console.log('aplicacion: ' + config.get('nombre'));
console.log('BD server: ' + config.get('configDB'));

if (app.get('env') === 'development') {
    app.use(morgan('tiny'))
    debug('morgan esta habilitado')
}

debug('conectando a la base de datos')

app.get('/', (req, res) => {
    res.send('Hola Mundo desde Express.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}...`);
})