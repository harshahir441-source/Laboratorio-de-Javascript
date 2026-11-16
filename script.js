
/* 1. SUMA DE TRES NUMEROS */

document.getElementById("form-suma").addEventListener("submit", function(event) {

    event.preventDefault();

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    let suma = num1 + num2 + num3;

    document.getElementById("resultado-suma").textContent =
        "Resultado: " + suma;

});


/* 2. CUADRADO DE UN NUMERO */

document.getElementById("form-cuadrado").addEventListener("submit", function(event) {

    event.preventDefault();

    let numero = parseFloat(document.getElementById("num4").value);

    let cuadrado = numero * numero;

    document.getElementById("resultado-cuadrado").textContent =
        "Resultado: " + cuadrado;

});


/* 3. PROMEDIO DE CALIFICACIONES */

document.getElementById("form-promedio").addEventListener("submit", function(event) {

    event.preventDefault();

    let cal1 = parseFloat(document.getElementById("cal1").value);
    let cal2 = parseFloat(document.getElementById("cal2").value);
    let cal3 = parseFloat(document.getElementById("cal3").value);

    let promedio = (cal1 + cal2 + cal3) / 3;

    document.getElementById("resultado-promedio").textContent =
        "Promedio: " + promedio.toFixed(2);

});


/* 4. CONVERSION DE METROS */

document.getElementById("form-metros").addEventListener("submit", function(event) {

    event.preventDefault();

    let metros = parseFloat(document.getElementById("metros").value);

    let centimetros = metros * 100;
    let kilometros = metros / 1000;

    document.getElementById("resultado-metros").textContent =
        centimetros + " cm | " + kilometros + " km";

});


/* 5. COMPARACION DE DOS VALORES */

document.getElementById("form-comparacion").addEventListener("submit", function(event) {

    event.preventDefault();

    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);

    let resultado = "";

    if (valor1 > valor2) {

        resultado = "El primer valor es mayor.";

    } else if (valor2 > valor1) {

        resultado = "El segundo valor es mayor.";

    } else {

        resultado = "Ambos valores son iguales.";

    }

    document.getElementById("resultado-comparacion").textContent = resultado;

});
