const fs = require('fs')

let crearSerie = (cantidad) => {

    return new Promise((res, rej) => {

        let fibo1 = 1
        let fibo2 = 1
        let data = ''

        data += `${fibo2}\t`

        for (let i = 2; i<= cantidad; i++) {
            data += `${fibo2}\t`
            fibo2 = fibo1 + fibo2
            fibo1 = fibo2 - fibo1
        }

       fs.writeFile('fibonacci.txt', data, (err) => {
        if (err)
            rej('Error')
        else 
            res('Archivo creado con exito')
        })
    })
}

module.exports = {
    crearSerie
}