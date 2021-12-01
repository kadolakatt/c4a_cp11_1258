const miPromise1 = function () {
    return new Promise(function (resolve) {
        console.log(Date.now() + " - Ejecutando miPromise1");
        setTimeout(function () {
            resolve(Date.now() + " - Terminamos de ejecutar miPromise1 con exito.");
        }, 5000);
    });
}

const fs = require('fs');

const miPromise2 = function() {
    return new Promise(function (resolve) {
        console.log(Date.now() + " - Ejecutando miPromise2");
        fs.readFile('./input.txt', function (err, data){
            resolve(data);
        });
    });
}
/*Ejecución en asincrona "paralelo"
miPromise1().then(function (mensajeExito) { 
    console.log(mensajeExito);
}).catch(function (err) {
    console.log(err);
});

miPromise2().then(function (data) {
    console.log(Date.now() + " - " + data.toString());
});*/

//Ejecución secuencial de la promises 
miPromise1()
    .then(function (mensajeExito) { 
        console.log(mensajeExito);
        return miPromise2(); //faltaba el return
    })
    .then(function (data) {
        console.log(Date.now() + " - " + data.toString());
    });

console.log(Date.now() + " - Ultima instrucción.");