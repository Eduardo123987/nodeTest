let deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);