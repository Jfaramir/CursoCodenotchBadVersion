function reto1(){
    let numeros = [1,2,3,4,5,6,7,8,9,10];
    var j = 0;
    console.log("for");
    for (i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            console.log(numeros[i]);
        }
    }
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 3 == 0 && numeros[i] % 2 != 0) {
            console.log(numeros[i]);
        }
    }

    primera = true;
    console.log("do/while");
    do {
        if (primera == false) {
            console.log(numeros[j]);
            j++;
        }else{
            primera = false;
        }
    } while (j < numeros.length);

    j = 0;
    primera = true;
    do {
        if (primera == false) {
            if (numeros[j] % 2 == 0) {
                console.log(numeros[j]);
            }
            j++;
        }else{
            primera = false;
        }
    } while (j < numeros.length);

    j = 0;
    primera = true;
    do {
        if (primera == false) {
            if (numeros[j] % 3 == 0 && numeros[j] % 2 != 0) {
                console.log(numeros[j]);
            }
            j++;
        }else{
            primera = false;
        }
    } while (j < numeros.length);

    j = 0;
    console.log("while");
    while (j < numeros.length) {
        console.log(numeros[j]);
        j++;
    }

    j = 0;
    while (j < numeros.length) {
        if (numeros[j] % 2 == 0) {
            console.log(numeros[j]);
        }
        j++;
    }

    j = 0;
    while (j < numeros.length) {
        if (numeros[j] % 3 == 0 && numeros[j] % 2 != 0) {
            console.log(numeros[j]);
        }
        j++;
    }
}

function reto2() {
    var persona1 = {
        "nombre": "Kim",
        "apellido": "Possible",
        "anoNacimiento": 2007,
        "aficciones": ["leer", "correr", "comer"],
        "dni": {
            "anyoExpedicion": 2020,
            "lugarNacimiento": "Españita"
        },
        "colorPelo": "castaño"
    }
    var persona2 = {
        "nombre": "Bender",
        "apellido": "Doblador Rodriguez",
        "anoNacimiento": 2997,
        "aficciones": ["doblar", "beber", "robar"],
        "dni": {
            "anyoExpedicion": 3000,
            "lugarNacimiento": "Tijuana, Mexico"
        },
        "colorPelo": ""
    }
    var persona3 = {
        "nombre": "Philip",
        "apellido": "J. Fry",
        "anoNacimiento": 1979,
        "aficciones": ["viajar", "dormir", "vaguear"],
        "dni": {
            "anyoExpedicion": 3000,
            "lugarNacimiento": "Noruega"
        },
        "colorPelo": "naranja"
    }
    var persona4 = {
        "nombre": "Bugs",
        "apellido": "Bunny",
        "anoNacimiento": 1938,
        "aficciones": ["molestar", "comer", "viajar"],
        "dni": {
            "anyoExpedicion": 2000,
            "lugarNacimiento": "Estados Unidos"
        },
        "colorPelo": "negro"
    }

    let personas = [persona1, persona2, persona3, persona4];
    console.log("for")
    for (let i = 0; i < personas.length; i++) {
        console.log(personas[i]);
    }

    var j = 0;
    console.log("while");
    while (j < personas.length) {
        console.log(personas[j]);
        j++;
    }

    console.log("for")
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].anoNacimiento >= 1978 && personas[i].anoNacimiento <= 2000) {
            console.log(personas[i]);
            console.log("Tu edad esta entre 40 y 20 años");
        }else if(personas[i].anoNacimiento < 1978){
            console.log(personas[i]);
            console.log("Tu edad es mayor de 40 años");
        }else{
            console.log(personas[i]);
            console.log("Tu edad es menor de 20 años");
        }
    }

    var j = 0;
    console.log("while");
    while (j < personas.length) {
        if (personas[j].anoNacimiento >= 1978 && personas[j].anoNacimiento <= 2000) {
            console.log(personas[j]);
            console.log("Tu edad esta entre 40 y 20 años");
        }else if(personas[j].anoNacimiento < 1978){
            console.log(personas[j]);
            console.log("Tu edad es mayor de 40 años");
        }else{
            console.log(personas[j]);
            console.log("Tu edad es menor de 20 años");
        }
        j++;
    }

    numAficciones = personas[0].aficciones.length;
    console.log("aficciones + 1")
    for (let i = 0; i < personas.length; i++) {
        personas[i].aficciones.splice(numAficciones,0,"jugar a la play");
    }

    console.log(personas)
}

function reto3(n) {
    var factorialFor = 1;
    console.log("for"); 
	for (i = 1; i <= n; i++) {
		factorialFor = factorialFor * i; 
    }

    console.log(factorialFor); 
    var factorialWhile = 1;
    var numAux = n;
    console.log("while");
    while (numAux > 1) {
        factorialWhile = factorialWhile * numAux;
        numAux--;
    }

    console.log(factorialWhile);
    let numeros = [1,2,3,4,5,6,7,8,9,10];
    j = 0;
    var existe = false; 
    while (j < numeros.length && existe == false) {
        if (numeros[j] % 2 == 0) {
            existe = true;
            console.log("existe");
        }
        j++;
    }

    var cien = 100;
    var suma = 0;
    for (k = 1; k <= cien; k++) {
        suma +=  k;
    }

    console.log(suma);
    let nombres = ["Pedro","Miguel","Alicia","Pepe","Juan","David","Ricardo"];
    l = 0;
    existe = false;
    while (l < nombres.length && existe == false) {
        if (nombres[l] == "Pepe") {
            existe = true;
            console.log("La posición " + (l + 1)  + " en el array es Pepe");
        }
        l++;
    }

    let vector1 = [];
    let vector2 = [];
    var max = 20;
    var min = 0;
    for (m = 0; m < cien; m++) {
        var numRandom = Math.floor(Math.random() * (max - min + 1) + min);
        var numRandomV2 = Math.floor(Math.random() * (max - min + 1) + min);

        vector1.push(numRandom);
        vector2.push(numRandomV2);
    }

    console.log(vector1);
    console.log(vector2);
    let sumaVectores = [];
    var vectorAux1 = 0;
    var vectorAux2 = 0;
    for (let n = 0; n < vector1.length; n++) {
            vectorAux1 = vector1[n];
            vectorAux2 = vector2[n];
            sumaVectores.push(vectorAux1 + vectorAux2);
    }
    console.log(sumaVectores);
}

function reto4() {
    var persona1 = {
        "nombre": "Kim",
        "apellido": "Possible",
        "anoNacimiento": 2007,
        "aficciones": ["leer", "correr", "comer"],
        "dni": {
            "anyoExpedicion": 2020,
            "lugarNacimiento": "Españita",
            "colorPelo": "castaño"
        }
    }
    var persona2 = {
        "nombre": "Bender",
        "apellido": "Doblador Rodriguez",
        "anoNacimiento": 2997,
        "aficciones": ["doblar", "beber", "robar"],
        "dni": {
            "anyoExpedicion": 3000,
            "lugarNacimiento": "Tijuana, Mexico",
            "colorPelo": ""
        }
    }
    var persona3 = {
        "nombre": "Philip",
        "apellido": "J. Fry",
        "anoNacimiento": 1975,
        "aficciones": ["viajar", "dormir", "vaguear"],
        "dni": {
            "anyoExpedicion": 3000,
            "lugarNacimiento": "Noruega",
            "colorPelo": "naranja"
        }
    }
    var persona4 = {
        "nombre": "Bugs",
        "apellido": "Bunny",
        "anoNacimiento": 1938,
        "aficciones": ["molestar", "comer", "viajar"],
        "dni": {
            "anyoExpedicion": 2000,
            "lugarNacimiento": "Estados Unidos",
            "colorPelo": "negro"
        }
    }

    let personas = [persona1, persona2, persona3, persona4];
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].dni.colorPelo == "castaño") {
            console.log(personas[i].nombre);
        }
    }

    var fechaSistema = new Date();
    var anoSistema = fechaSistema.getFullYear();
    for (let j = 0; j < personas.length; j++) {
        if (Math.abs(personas[j].anoNacimiento - anoSistema) >= 30) {
            var edad = anoSistema - personas[j].anoNacimiento;
            console.log(Math.abs(edad));
        } 
    }

    var dniCaducado = false;

    for (let k = 0; k < personas.length; k++) {
        if (anoSistema - personas[k].dni.anyoExpedicion >= 8 ) {
            dniCaducado = true;
        }

        if ((dniCaducado == true && personas[k].dni.colorPelo == "negro") 
            || (Math.abs(personas[k].anoNacimiento - anoSistema) < 18 && (personas[k].aficciones[0] == "comer" || personas[k].aficciones[0] == "dormir"))
            || (Math.abs(personas[k].anoNacimiento - anoSistema) < 18 && (personas[k].aficciones[1] == "comer" || personas[k].aficciones[1] == "dormir"))
            || (Math.abs(personas[k].anoNacimiento - anoSistema) < 18 && (personas[k].aficciones[2] == "comer" || personas[k].aficciones[2] == "dormir"))) {
            console.log(personas[k].dni.lugarNacimiento);
        }
    }
}


// reto1();
// reto2();
// reto3(5);
// reto4();