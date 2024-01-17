const { registrar, leer } = require('./operaciones');
const entrada = process.argv.slice(2);
const operacion = entrada[0];

if (operacion === "registrar"){
    registrar(entrada);
} else if (operacion === "leer"){
    leer();    
} else {
    console.log(`
    ==============================================================
                            VETERINARIA
    ==============================================================
              Debe ingresar una accion para realizar.
    ______________________________________________________________

    * Para REGISTRAR utilize la siguiente sintaxis:
        node index registrar nombre "edad" animal color enfermedad

    Importante: 
            - Edad debe estar entre "comillas dobles" y debe
              indicar si es dias - meses - años.
              Ej: "25 dias", "6 meses", "2 años"

            - Todos los campos son obligatorios.
    ______________________________________________________________

    * Para LEER utilize la siguiente sintaxis:
        node index leer
    `);
};