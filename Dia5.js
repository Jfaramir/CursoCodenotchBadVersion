function retoVariable() {
    var oracionNegrita1 = "Lorem ipsum dolor sit amet";
    var oracionNormal1 = ", consectetur adipiscing elit";
    var oracionCursiva1 = "Phasellus mattis vehicula consequat. Proin dapibus nunc quam, nec dictum erat feugiat vitae."
    var oracionTachada = "Curabitur dignissim nisi a est vulputate tristique";
    var oracionNormal2 = "Curabitur maximus erat leo, sit amet facilisis est egestas sed.";
    var oracionNegrita2 = "Morbi aliquam, ipsum eget volutpat blandit, lectus odio condimentum dui, eget dictum quam ipsum sit amet nulla.";
    var saltoLinea = "<br>";

    var oracionCompleta = oracionNegrita1.bold() + oracionNormal1 + saltoLinea + oracionCursiva1.italics() +
        saltoLinea + saltoLinea + oracionTachada.strike() + saltoLinea + oracionNormal2 + 
        saltoLinea + saltoLinea + oracionNegrita2.bold();

    document.write(oracionCompleta);
}

function retoCondicionales(precioNeto, paisProcedencia) {
    var precioBruto = 0;
    var aduanas = 0;

    if (precioNeto >= 2000) {
        precioBruto = precioNeto + (precioNeto * 16)/100;
    }else{
        precioBruto = precioNeto + (precioNeto/10)
    }

    if (paisProcedencia != "España") {
        aduanas = precioNeto/10;
        precioBruto += aduanas;
    }

    console.log(precioBruto);
}

function retoBucles() {
    var total = 0;
    for (let i = 0; i < 100; i++) {
        total += +(i * i);
    }
    console.log(total);
}

function retoFinal1() {
    let libros = ["Ready player one", "El nombre del viento", "El temor de un hombre sabio", "Cien años de soledad", "Origen"];
    let librosNumero = [];
    var auxMasLargo = 0;
    for (let i = 0; i < libros.length; i++) {
        var letrasTitulo = libros[i].replace( /\s/g, '' ).length;
        if (letrasTitulo > auxMasLargo){
            auxMasLargo = letrasTitulo;
        }
        librosNumero.push(letrasTitulo);
    }

    for (let j = 0; j < librosNumero.length; j++) {
        if (librosNumero[j] == auxMasLargo) {
            document.write(libros[j].bold() + " [" + librosNumero[j].toString().bold() + "] <br>")
        }else{
            document.write(libros[j] + " [" + librosNumero[j] + "] <br>")
        }
    }
}

function retoFinal2() {
    
    let matrizVectores1 = [];
    let matrizVectores2 = [];
    var max = 50;
    var min = 0;
    for (i = 0; i < 10; i++) {
        let vector1 = [];
        let vector2 = [];
        for (j = 0; j < 10; j++) {
            vector1.push(Math.floor(Math.random() * (max - min + 1) + min));
        }

        matrizVectores1.push(vector1);
        for (k = 0; k < 10; k++) {
            vector2.push(Math.floor(Math.random() * (max - min + 1) + min));
        }

        matrizVectores2.push(vector2);
    }

    console.log(matrizVectores1);
    console.log("-------------------");
    console.log(matrizVectores2);
    console.log("-------------------");
    let sumaMatrizes = [];
    var vectorAux1 = 0;
    var vectorAux2 = 0;
    for (l = 0; l < matrizVectores1.length; l++) {
        let sumaVectores = [];
        for (n = 0; n < matrizVectores1.length; n++) {
            vectorAux1 = matrizVectores1[n][l];
            vectorAux2 = matrizVectores2[n][l];
            sumaVectores.push(vectorAux1 + vectorAux2);
        }
        sumaMatrizes.push(sumaVectores);
    }

    console.log(sumaMatrizes);
    console.log("-------------------");
    var matrizAux = 0;
    let matrizMultiplicada = [];
    var numero = Math.floor(Math.random() * (1000 - 0 + 1) + 0);
    for (l = 0; l < matrizVectores1.length; l++) {
        let vectoresMultiplicados = [];
        for (n = 0; n < matrizVectores1.length; n++) {
            matrizAux = sumaMatrizes[n][l];
            vectoresMultiplicados.push(matrizAux * numero);
        }
        matrizMultiplicada.push(vectoresMultiplicados);
    }
    console.log(matrizMultiplicada);
    console.log("Número por el que multiplicamos la matriz: " + numero);
}


// retoCondicionales();
// retoBucles();
// retoFinal2();
