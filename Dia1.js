function reto4(min, max) {
    var numerorandom = Math.floor(Math.random() * (max - min)) + min;

    console.log(numerorandom);
    document.write(numerorandom);
}

function reto3(num) {
    var raiz = Math.sqrt(num);

    console.log(raiz);
    document.write(raiz);
}

function reto1y2(num) {
    var nombre = "Pedro";
    var apellido = "Picapiedra";

    var frase = "Despues de esta pelea " + nombre.fontcolor("blue") + " " + apellido.fontcolor("green") + " tiene muchas magulladuras.";
    var fraseMayus = frase.toUpperCase();

    document.writeln(frase);
    console.log(frase);

    document.writeln(fraseMayus);
    console.log(fraseMayus);
}

reto4(0,11);