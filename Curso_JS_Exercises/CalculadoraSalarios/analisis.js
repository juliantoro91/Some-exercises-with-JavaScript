// Promedio
function promedio(lista) {
    const suma = lista.reduce(
        function (valor = 0, elemento) {
            return valor + elemento;
        }
    );

    const promedio = suma / lista.length;
    
    return promedio;
}

// Mediana
function numeroPar(length) {
    return (length % 2 === 0) ? true : false;
}

function mediana(lista) {
    const esPar = numeroPar(lista.length);

    (esPar) ? index = lista.length / 2 : index = (lista.length - 1) / 2;

    let mediana;
    (!esPar) ? mediana = lista[index] : mediana = promedio([lista[index], lista[index - 1]]);

    return mediana;
}


// Moda
function moda(lista) {
    let datos = {};
    let elemento;

    lista.map(
        function (elemento) {
            (!datos[elemento]) ? datos[elemento] = 1 : datos[elemento]++;
        }
    );

    datos = Object.entries(datos).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = datos[datos.length - 1][0];

    return moda;
}


// Calculadora
function CalcularEstadisticasSalarios() {

    const datos = personas.getSalarios().sort((a, b) => a - b);

    let message = "El Promedio de salarios es US$ " + promedio(datos);
    message += "<br />" + "La Mediana de salarios es US$ " + mediana(datos);

    const topDiez = Math.floor(datos.length / 10);
    const datos10 = datos.splice(
        datos.length - topDiez,
        topDiez);

    message += "<br />" + "La Mediana del Top10 es US$ " + mediana(datos10);

    document.getElementById("InputData").innerHTML = personas.imprimir();
    document.getElementById("ResultStats").innerHTML = message;
}