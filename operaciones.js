// Registrar pacientes *********************************
const registrar = (entrada) => {
    
    if (entrada.length === 6){
        let cita = {
            nombre: entrada[1],
            edad: entrada[2],
            animal: entrada[3],
            color: entrada[4],
            enfermedad: entrada[5],
        };
    
        const fs = require('fs');
        const citasold = fs.readFileSync('citas.json', 'utf8');
        const citas = (JSON.parse(citasold));    
        citas.push(cita);    
        fs.writeFileSync('citas.json', JSON.stringify(citas));
        console.log(`
        Registro Exitoso
        `);
    } else {
        console.log(`
        Recuerde que TODOS los campos son obligatorios.
        Para detalles ejecute:
            node index
        `);
    };    
};


// Leer pacientes ****************************************
const leer = () => {
    const fs = require('fs');
    const citasjson = fs.readFileSync('citas.json', 'utf8');
    const citas = (JSON.parse(citasjson));
    const numero = citas.length;    

    if (numero < 1) {        
        console.log(`
    Lo sentimos mucho, NO HAY registros para mostrar
    `);
    } else {
        console.log(citas);
        console.log('Numero de registros: ', numero);
    };
};

// Exportacion de las funciones Registrar y Leer
module.exports = { registrar, leer };

