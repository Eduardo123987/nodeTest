//todos los requireds van all inico del codigo
const fs = require('fs');
let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero `);
            return;
        }
        let data = '';
        for (i = 1; i <= 10; i++) {
            data += (`${base } * ${i} = ${base * i} \n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`El archivo tabla-${base}.txt ha sido creado`)
        });
    });
}

module.exports = {
    crearArchivo
}