// Código del cuadrado

const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => Math.pow(lado, 2);


// Código del triángulo

const perimetroTriangulo = (lado1, lado2, lado3) => Number(lado1) + Number(lado2) + Number(lado3);

function areaTriangulo(lado1, lado2, lado3) {
  const medidas = hallarMedidas (lado1, lado2, lado3);
  const base = medidas.base;
  const altura = medidas.altura;
  return (base * altura) / 2;
}

function hallarMedidas(lado1, lado2, lado3) {
  const lados = [lado1, lado2, lado3];
  let medidas = {
    base: 0,
    altura: 0
  };

  let hipotenusa;
  let base;
  let altura;
  let j = 0; //indice cateto1
  let k = 1; //indice cateto2
  for (let i = 0; i < lados.length; i++) {
    hipotenusa = lados[i];
    
    (j + 1 >= lados.length) ? j = 0 : j++;
    (k + 1 >= lados.length) ? k = 0 : k++;

    base = lados[j];
    altura = lados[k];

    // Comprobar si es rectángulo
    if (Math.pow(hipotenusa, 2) == Math.pow(base, 2) + Math.pow(altura, 2)) {
      medidas.base = base;
      medidas.altura = altura;

      return medidas;
    }

    // Comprobar si es isósceles
    if (hipotenusa == lados[j]) {
      base = lados[k];
      medidas.base = base;
      altura = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(base/2, 2));
      medidas.altura = altura;

      return medidas;
    }

  }
  
  // Si no cumple ninguno de los casos anteriores
  let ladoMayor;
  let ladoMedio;
  let ladoMenor;
  let i = 0;
  j = 0;
  k = 1;
  while (true) {
    (j + 1 >= lados.length) ? j = 0 : j++;
    (k + 1 >= lados.length) ? k = 0 : k++;

    if (lados[i] > lados[j]) {
      if (lados.length == 3) {
        if (lados[i] > lados[k]) {
          ladoMayor = lados.splice(i, 1);
          i = -1;
          j = 0;
        } 
      } else {
        ladoMedio = lados[i];
        ladoMenor = lados[j];
        break;
      }
    }
    i++;
  }
  
  let auxiliar = (Math.pow(ladoMayor, 2) + Math.pow(ladoMenor, 2) - Math.pow(ladoMedio, 2)) / (2 * ladoMayor);

  base = ladoMayor;
  medidas.base = base;

  altura = Math.sqrt(Math.pow(ladoMenor, 2) - Math.pow(auxiliar, 2));
  medidas.altura = altura;

  console.log(`Mayor: ${ladoMayor}
  Medio: ${ladoMedio}
  Menor: ${ladoMenor}
  Altura: ${altura}`);

  return medidas;
  
}


// Código del círculo

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (Math.pow(radio, 2) * PI);
}


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("LadoCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  console.log(perimetro);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("LadoCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  console.log(area);
  alert(area);
}
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("Lado1Triangulo");
  const lado1 = input1.value;
  console.log(lado1);
  const input2 = document.getElementById("Lado2Triangulo");
  const lado2 = input2.value;
  const input3 = document.getElementById("Lado3Triangulo");
  const lado3 = input3.value;

  const perimetro = perimetroTriangulo(lado1, lado2, lado3);
  console.log(perimetro);
  alert(perimetro);
}
function calcularAreaTriangulo() {
  const input1 = document.getElementById("Lado1Triangulo");
  const lado1 = input1.value;
  const input2 = document.getElementById("Lado2Triangulo");
  const lado2 = input2.value;
  const input3 = document.getElementById("Lado3Triangulo");
  const lado3 = input3.value;

  const area = areaTriangulo(lado1, lado2, lado3);
  console.log(area);
  alert(area);
}
function calcularPerimetroCirculo() {
  const input = document.getElementById("RadioCirculo");
  const radio = input.value;

  const perimetro = perimetroCirculo(radio);
  console.log(perimetro);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const input = document.getElementById("RadioCirculo");
  const radio = input.value;

  const area = areaCirculo(radio);
  console.log(area);
  alert(area);
}