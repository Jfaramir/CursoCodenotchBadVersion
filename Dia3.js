function reto1(semaforo) {
    if (semaforo == "verde") {
        console.log("Puede cruzar");
    } else if (semaforo == "naranja") {
        console.log("No puede cruzar");
    } else {
        console.log("No puede cruzarr");
    }
}

function reto2(ingrediente) {
    var ingredientes = ["pollo", "alubias", "garbanzos", "espaguetis", "macarrones", "arroz", "mantequilla", "huevo", "calabaza", "salmon"];
    var recetas = ["Pollo al horno con patatas", "Alubias blancas con verduras", "Garbanzos con espinacas", "Espaguetis con tomate", "Macarrones con tomate y atun", "Arroz con verduras", "Galletas de mantequilla", "Natillas", "Crema de calabaza", "Salmon al horno"]

    switch (ingrediente) {
        case ingredientes[0]:
            console.log(recetas[0]);
            break;
        case ingredientes[1]:
            console.log(recetas[1]);
            break;
        case ingredientes[2]:
            console.log(recetas[2]);
            break;
        case ingredientes[3]:
            console.log(recetas[3]);
            break;
        case ingredientes[4]:
            console.log(recetas[4]);
            break;
        case ingredientes[5]:
            console.log(recetas[5]);
            break;
        case ingredientes[6]:
            console.log(recetas[6]);
            break;
        case ingredientes[7]:
            console.log(recetas[7]);
            break;
        case ingredientes[8]:
            console.log(recetas[8]);
            break;
        case ingredientes[9]:
            console.log(recetas[9]);
            break;

        default:
            console.log("Imposible proponer receta");
            break;
    }
}

function reto3(restaurante) {
    restaurante.toLowerCase();
    restaurante.trim();

    burgerking = {
        "NumPlatosMenu": 3,
        "DJ": false,
        "BarraLibreHoras": 3,
        "coctelBienvenida": false
    }
    mcdonald = {
        "NumPlatosMenu": 1,
        "DJ": true,
        "BarraLibreHoras": 1,
        "coctelBienvenida": false
    }
    fiveguys = {
        "NumPlatosMenu": 2,
        "DJ": false,
        "BarraLibreHoras": 3,
        "coctelBienvenida": true
    }
    fosterhollywood = {
        "NumPlatosMenu": 3,
        "DJ": true,
        "BarraLibreHoras": 3,
        "coctelBienvenida": true
    }

    if (restaurante == "burgerking") {
        if ((burgerking.NumPlatosMenu >= 3 && burgerking.DJ == true && burgerking.BarraLibreHoras >= 2)
            || (burgerking.coctelBienvenida == true && burgerking.NumPlatosMenu >= 2 && burgerking.BarraLibreHoras >= 1)) {
            console.log("Este nos sirve");
        } else {
            console.log("Este no nos sirve");
        }
    }

    if (restaurante == "mcdonald") {
        if ((mcdonald.NumPlatosMenu >= 3 && mcdonald.DJ == true && mcdonald.BarraLibreHoras >= 2)
            || (mcdonald.coctelBienvenida == true && mcdonald.NumPlatosMenu >= 2 && mcdonald.BarraLibreHoras >= 1)) {
            console.log("Este nos sirve");
        } else {
            console.log("Este no nos sirve");
        }
    }

    if (restaurante == "fiveguys") {
        if ((fiveguys.NumPlatosMenu >= 3 && fiveguys.DJ == true && fiveguys.BarraLibreHoras >= 2)
            || (fiveguys.coctelBienvenida == true && fiveguys.NumPlatosMenu >= 2 && fiveguys.BarraLibreHoras >= 1)) {
            console.log("Este nos sirve");
        } else {
            console.log("Este no nos sirve");
        }
    }

    if (restaurante == "fosterhollywood") {
        if ((fosterhollywood.NumPlatosMenu >= 3 && fosterhollywood.DJ == true && fosterhollywood.BarraLibreHoras >= 2)
            || (fosterhollywood.coctelBienvenida == true && fosterhollywood.NumPlatosMenu >= 2 && fosterhollywood.BarraLibreHoras >= 1)) {
            console.log("Este nos sirve");
        } else {
            console.log("Este no nos sirve");
        }
    }

    // if ((restaurante.NumPlatosMenu >= 3 && restaurante.DJ == true && restaurante.BarraLibreHoras >= 2)
    //     || (restaurante.coctelBienvenida = true && restaurante.NumPlatosMenu >= 2 && restaurante.BarraLibreHoras >= 1)) {
    //     console.log("Este nos sirve");
    // } else {
    //     console.log("Este no nos sirve");
    // }
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

    if (personas[0].dni.colorPelo == "castaño") {
        console.log(personas[0].nombre);
    } if (personas[1].dni.colorPelo == "castaño") {
        console.log(personas[1].nombre);
    } if (personas[2].dni.colorPelo == "castaño") {
        console.log(personas[2].nombre);
    } if (personas[3].dni.colorPelo == "castaño") {
        console.log(personas[3].nombre);
    }

    var fechaSistema = new Date();
    var anoSistema = fechaSistema.getFullYear();

    if (Math.abs(personas[0].anoNacimiento - anoSistema) >= 30) {
        var edad = anoSistema - personas[0].anoNacimiento;
        console.log(Math.abs(edad));
    } 
    if (Math.abs(personas[1].anoNacimiento - anoSistema) >= 30) {
        var edad = anoSistema - personas[1].anoNacimiento;
        console.log(Math.abs(edad));
    } 
    if (Math.abs(personas[2].anoNacimiento - anoSistema) >= 30) {
        var edad = anoSistema - personas[2].anoNacimiento;
        console.log(Math.abs(edad));
    } 
    if (Math.abs(personas[3].anoNacimiento - anoSistema) >= 30) {
        var edad = anoSistema - personas[3].anoNacimiento;
        console.log(Math.abs(edad));
    }

    var dniCaducado = false;

    if (anoSistema - personas[0].dni.anyoExpedicion >= 8 ) {
        dniCaducado = true;
    } if (anoSistema - personas[1].dni.anyoExpedicion >= 8 ) {
        dniCaducado = true;
    } if (anoSistema - personas[2].dni.anyoExpedicion >= 8 ) {
        dniCaducado = true;
    } if (anoSistema - personas[3].dni.anyoExpedicion >= 8 ) {
        dniCaducado = true;
        console.log(dniCaducado);
    }


    if ((dniCaducado == true && personas[0].dni.colorPelo == "negro") 
        || (Math.abs(personas[0].anoNacimiento - anoSistema) < 18 && (personas[0].aficciones[0] == "comer" || personas[0].aficciones[0] == "dormir"))
        || (Math.abs(personas[0].anoNacimiento - anoSistema) < 18 && (personas[0].aficciones[1] == "comer" || personas[0].aficciones[1] == "dormir"))
        || (Math.abs(personas[0].anoNacimiento - anoSistema) < 18 && (personas[0].aficciones[2] == "comer" || personas[0].aficciones[2] == "dormir"))) {
        console.log(personas[0].dni.lugarNacimiento);
    }

    if ((dniCaducado == true && personas[1].dni.colorPelo == "negro") 
        || (Math.abs(personas[1].anoNacimiento - anoSistema) < 18 && (personas[1].aficciones[0] == "comer" || personas[1].aficciones[0] == "dormir"))
        || (Math.abs(personas[1].anoNacimiento - anoSistema) < 18 && (personas[1].aficciones[1] == "comer" || personas[1].aficciones[1] == "dormir"))
        || (Math.abs(personas[1].anoNacimiento - anoSistema) < 18 && (personas[1].aficciones[2] == "comer" || personas[1].aficciones[2] == "dormir"))) {
        console.log(personas[1].dni.lugarNacimiento);
    }

    if ((dniCaducado == true && personas[2].dni.colorPelo == "negro") 
        || (Math.abs(personas[2].anoNacimiento - anoSistema) < 18 && (personas[2].aficciones[0] == "comer" || personas[2].aficciones[0] == "dormir"))
        || (Math.abs(personas[2].anoNacimiento - anoSistema) < 18 && (personas[2].aficciones[1] == "comer" || personas[2].aficciones[1] == "dormir"))
        || (Math.abs(personas[2].anoNacimiento - anoSistema) < 18 && (personas[2].aficciones[2] == "comer" || personas[2].aficciones[2] == "dormir"))) {
        console.log(personas[2].dni.lugarNacimiento);
    }

    if ((dniCaducado == true && personas[3].dni.colorPelo == "negro") 
        || (Math.abs(personas[3].anoNacimiento - anoSistema) < 18 && (personas[3].aficciones[0] == "comer" || personas[3].aficciones[0] == "dormir")) 
        || (Math.abs(personas[3].anoNacimiento - anoSistema) < 18 && (personas[3].aficciones[1] == "comer" || personas[3].aficciones[1] == "dormir")) 
        || (Math.abs(personas[3].anoNacimiento - anoSistema) < 18 && (personas[3].aficciones[2] == "comer" || personas[3].aficciones[2] == "dormir"))) {
        console.log(personas[3].dni.lugarNacimiento);
    }

}


// reto1("verde"); 
// reto2("azucar");
// reto3("fosterhollywood");
reto4();