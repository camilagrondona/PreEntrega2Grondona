const planes = [{
    id: 1,
    nombre: "PLAN A",
    precio: 3630
},
{
    id: 2,
    nombre: "PLAN B",
    precio: 4840
},
{
    id: 3,
    nombre: "PLAN C",
    precio: 6050
},
{
    id: 4,
    nombre: "PLAN D",
    precio: 7260
},
];

// Find 

let inputValido = true;
while (inputValido) {

    let nombre = prompt("Ingrese el nombre del plan que desea verificar").toUpperCase();
    let plan = planes.find((plan) => plan.nombre === nombre);

    if (plan) {
        alert
            (`
Id: ${plan.id}
Nombre: ${plan.nombre}
Precio: ${plan.precio}
`);
        inputValido = false; // Valor ingresado es válido, salir del bucle
    } else {
        alert("El plan que ingresaste no se encuentra disponible, intenta de nuevo.");
    }
}

// Filter

let validInput = true;
while (validInput) {

    let precio = parseInt(prompt("Ingresá el precio máximo que estás dispuesto/a a abonar para ver cuál de nuestros planes se ajusta mejor a vos"))
    let filtrados = planes.filter(plan => plan.precio < precio)

    if (filtrados.length > 0) {
        filtrados.forEach(plan => {
            alert(`
    Id: ${plan.id}
    Nombre: ${plan.nombre}
    Precio: ${plan.precio}
    `);
        });
        validInput = false; // Valor ingresado es válido, salir del bucle
    } else {
        alert("El valor ingresado no se ajusta a ninguno de los planes disponibles. Por favor, intenta nuevamente.");
    }
}

