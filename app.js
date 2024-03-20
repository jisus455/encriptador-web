const vocales = ["a", "e", "i", "o", "u"];
const claves = ["ai", "enter", "imes", "ober", "ufat"];

function codificar() {
    let textoEntrada = capturarElemento("entrada").value;
    let textoSalida = "";
    let largoTexto = textoEntrada.length;
    
    for (let index = 0; index < largoTexto; index++) {
        let letra = textoEntrada.charAt(index);
        let posicion = 0;
        let continuar = true;
        while (continuar) {
            if (letra === vocales[posicion]) {
                textoSalida += claves[posicion];
                continuar = false;
            }
            if (posicion === vocales.length) {
                textoSalida += letra; 
                continuar = false;
            }
            posicion++;
        }
    }
    capturarElemento("salida").value = textoSalida;
}

function decodificar() {
    let textoEntrada = capturarElemento("entrada").value;
    let textoSalida = textoEntrada;
    let indice = 0;

    while (textoSalida.includes(claves[0]) || 
            textoSalida.includes(claves[1]) ||
            textoSalida.includes(claves[2]) ||
            textoSalida.includes(claves[3]) ||
            textoSalida.includes(claves[4])) {

        textoSalida = textoSalida.replaceAll(claves[indice], vocales[indice]);
        indice++;
    }
    capturarElemento("salida").value = textoSalida;
}

function capturarElemento(id){
    var elemento = document.getElementById(id)
    return elemento;
}

function copiar(){

    let texto = capturarElemento("salida").value;
    
    const copiarContenido = async () => {
      try {
        await navigator.clipboard.writeText(texto);
        // console.log('Contenido copiado al portapapeles' + texto);
      } catch (err) {
        // console.error('Error al copiar: ', err);
      }
    }

    copiarContenido(); 
    
    var boton = document.querySelector(".button-copiar").innerHTML = '¡Copiado!';

    setTimeout(
        function botonCopiar(){
            var boton = document.querySelector(".button-copiar").innerHTML = '<i class="bi bi-copy"></i>Copiar';
        }, 3000
    );
}

function borrar(){
    var entrada = capturarElemento("entrada").value = "";
    var salida = capturarElemento("salida").value = "";
}



/*
codificar
    // let indice = 0;

    // while (textoSalida.includes(vocales[0]) && !textoSalida.includes(claves[0]) ||
    //         textoSalida.includes(vocales[1]) && !textoSalida.includes(claves[1]) ||
    //         textoSalida.includes(vocales[2]) && !textoSalida.includes(claves[2]) ||
    //         textoSalida.includes(vocales[3]) && !textoSalida.includes(claves[3]) ||
    //         textoSalida.includes(vocales[4]) && !textoSalida.includes(claves[4])) {
            
    //     textoSalida = textoSalida.replaceAll(vocales[indice], claves[indice]);
    //     indice++;
    // }
*/

/*
decodificar
    // for (let i = 0; i < 5; i++) {
    //     if (textoEntrada.includes(claves[i])) {
    //         textoSalida = textoSalida.replaceAll(claves[i], vocales[i]);
    //     } 
    // }
*/



