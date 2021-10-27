const lista = [100,200,200,400,500,600,600,600,600,600,600];

function promedio(lista) {
    const suma = lista.reduce(
        function (valor = 0, elemento) {
            return valor + elemento;
        }
    );

    const promedio = suma / lista.length;
    
    return promedio;
}

console.log(promedio(lista));


function numeroPar(length) {
    return (length % 2 === 0) ? true : false;
}

function mediana(lista) {
    const esPar = numeroPar(lista.length);

    (esPar) ? index = lista.length / 2 : index = (lista.length - 1) / 2;

    lista.sort((a, b) => a - b);

    let mediana;
    (!esPar) ? mediana = lista[index] : mediana = promedio([lista[index], lista[index - 1]]);

    return mediana;
}

console.log(mediana(lista));

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

console.log(moda(lista));

function mode(lista){
    return lista.sort((a,b) =>
          lista.filter(v => v===a).length - lista.filter(v => v===b).length
    ).pop();
}

console.log(mode(lista));

function CalcularEstadisticas() {
    const input = document.getElementById("InputData").value;

    const datos = input.split(",").map((dato) => Number(dato));

    let message = "El Promedio es " + promedio(datos);
    message += "<br />" + "La Mediana es " + mediana(datos);
    message += "<br />" + "La Moda es " + moda(datos);

    document.getElementById("ResultStats").innerHTML = message;
}