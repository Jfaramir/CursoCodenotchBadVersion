function reto1() {
    var cadena = "Esto es una cadena de texto";
    var numero = 13;
    var verdadero = Boolean();

    console.log("Reto 1 \n" )
    console.log(cadena, numero, verdadero);
}

function reto2 () {
    document.writeln("Reto 2" + "<br>");

    var parrafo1 = "Lo hemos estado viendo constantemente en los ejempols de cada uno de los tipos hasta ahora, pero para dar mas claridad a la sintaxis y al uso, una variable es un contenedor que almacena un valor."
    var parrafo2 = "Es una manera de poner nombre o codificar datos y/o valores que nos son utiles, interesantes o necesarios para lo que estamos haciendo."
    var parrafo3 = "La sintaxis de definicion es sencilla:";

    document.writeln(parrafo1 + "<br>" + parrafo2 + "<br>" + parrafo3 + "<br>");
}


function reto3() {
    document.writeln("Reto 3" + "<br>");

    let array1 = ["manzana","pera","sandia","melon","ciruela"];
    let array2 = ["esturión","caballa","tetra","disco","killifish"];
    let array3 = ["cerdo","ternera","cordero","pollo","conejo"];

    let matriz = [array1,array2,array3];
    document.writeln(matriz[2] + "<br>");

    var muestraMatriz2 = matriz[2];
    var muestraMatriz24 = muestraMatriz2[4];
    document.writeln(muestraMatriz2[4] + "<br>");
    stringMuestraMatriz24 = muestraMatriz24.toString();
    document.writeln(stringMuestraMatriz24.slice(1,2) + "<br>")

    let arrayNum = ["1","2","3","4","5"]

    muestraMatriz2.splice(0,5, arrayNum);
    document.writeln(muestraMatriz2 + "<br>");

    var muestraMatriz1 = matriz[1];
    var verdadero = Boolean();
    muestraMatriz1.splice(3,1, verdadero);
    document.writeln(muestraMatriz1[3] + "<br>");

    var longitudMatriz0 = matriz[0].length;
    var muestraMatriz0 = matriz[0];

    muestraMatriz0.splice(longitudMatriz0 - 1,0,"fresa");
    matriz[0].splice(0,1);
    matriz[0].splice(longitudMatriz0 - 2,1);

    muestraMatriz1.sort();
    document.writeln(muestraMatriz1 + "<br>");
}

function reto4() {
    document.writeln("Reto 4" + "<br>");

    var persona = {
        "nombre": "Pedro",
        "edad": 35,
        "esVaron": true,
        "aficiones": ["nadar","leer","patinar"],
        "dni": {
            "numero": 54364593,
            "fechaExpedicion": "20 Marzo 1999"
        }
    }

    document.writeln(persona.nombre + "<br>");
    document.writeln(persona.aficiones + "<br>");
    document.writeln(persona.aficiones[1] + "<br>");
    document.writeln(persona.dni.numero," ",persona.dni.fechaExpedicion + "<br>");
    document.writeln(persona.dni.fechaExpedicion + "<br>");
}

function reto5() {
    document.writeln("Reto 5" + "<br>");

    var edificio = {
        "tipo": "adosado",
        "fechaInicioConstruccion": "19-08-1999",
        "fechaFinConstruccion": "19-08-2020"
    }

    var comida = {
        "nombre": ["judias","lentejas"],
        "calorias": [224, 334]
    }

    var libros = {
        "nombre": "El nombre del viento",
        "autor": "Patrick Rothfuss"
    }

    var zapatos = {
        "marca": "adidas",
        "talla": 34
    }

    let arrayJsones = [edificio,comida,libros,zapatos];

    document.writeln(arrayJsones[0].tipo + "<br>");
    document.writeln(arrayJsones[1].calorias + "<br>");
    document.writeln(arrayJsones[2].nombre + "<br>");
    document.writeln(arrayJsones[3].marca + "<br>");
}