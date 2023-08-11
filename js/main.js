const planes = [
    { id: 1, nombre: "PLAN A", precio: 3630 },
    { id: 2, nombre: "PLAN B", precio: 4840 },
    { id: 3, nombre: "PLAN C", precio: 6050 },
    { id: 4, nombre: "PLAN D", precio: 7260 },
];

// Find 

let nombre = prompt("Ingrese el nombre del plan que desea verificar").toUpperCase();
let plan = planes.find((plan) => plan.nombre === nombre);

if (plan) {
    alert
        (`
Id: ${plan.id}
Nombre: ${plan.nombre}
Precio: ${plan.precio}
`);
} else {
    alert("El plan que ingresaste no se encuentra disponible");
}

// Filter

let precio = parseInt(prompt("Ingresá el precio máximo que estás dispuesto/a a abonar para ver cuál de nuestros planes se ajusta mejor a vos"))
let filtrados = planes.filter(plan => plan.precio < precio)

filtrados.forEach(plan => {
    alert(`
    Id: ${plan.id}
    Nombre: ${plan.nombre}
    Precio: ${plan.precio}
    `)
}
)


