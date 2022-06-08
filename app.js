const years = [2000, 2005, 2010, 2025, 2012]

var edad5 = years.map(function(el){
    return 2019 - el
})

console.log(edad5);

let edad6 = years.map((el) => {
    return 2019 - el
})

console.log(edad6);

function Sumar(num1, num2, cb) {
    let resultado = num1 + num2
    cb(resultado)
}

function Resultado(res) {
    console.log(res);
}

Sumar(5, 8, Resultado)

function mensaje() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true)
                resolve('Esto se va a ejecutar despues de 3 seg')
            else 
                reject('Hubo un error')
        }, 3000)
    })
}

async function llamadaAsync() {
    console.log('llamada');
    const resultado = await mensaje()
    return resultado
}

llamadaAsync().then(x => console.log(x)).catch(e => console.log(e))
// mensaje
//     .then(msj => {
//         console.log(msj);
//     })
//     .catch( error => {
//         console.log(error);
//     })


