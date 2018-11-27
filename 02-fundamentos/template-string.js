let nombre = 'Eduardo';
let real = 'Memo';

//console.log(`${nombre} ${real}`);

// let nombreCompleto = nombre + ' ' + real;
// let nombreTemplate = `${nombre} ${real}`;

//console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`el nombre de ${getNombre() }`);