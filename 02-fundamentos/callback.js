// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Fernando',
        id
    }

    if (id === 20) {
        callback(`El usuairo con id ${id} no existe en la BD`)
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(1, (err, usuario) => {
    if (err) {
        console.log(err);
    } else {
        console.log('usuario de base de datos', usuario);
    }
});