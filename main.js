const btnEncriptar = document.querySelector("#boton-encriptar");
const btnDesencriptar = document.querySelector("#boton-desencriptar");
const btnCopiar = document.querySelector("#boton-copiar");

const mensaje = document.querySelector("#caja-texto");

const mensajeResultado = document.querySelector("#texto-resultado");

const contenedorReferencia = document.querySelector("#contenedor-referencia");

//En la función validar se trabaja con la negación porque por un lado es más fácil validar que no existen caracteres especiales negando con el signo (^) la regex [a-z0-9\s]. Pero como la función se llama validarTexto, es necesario que devuelva true en caso de que el texto ingresado sea valido (por eso negamos en el return con el signo de admiración)
function validarTexto(string) {
  const regex = /[^a-z0-9\s]/;
  return !regex.test(string);
}

function encriptar(string) {
  let mensajeEncriptado = string.value.replace(/a|e|i|o|u/g, function (letra) {
    if (letra === "a") {
      return "ai";
    } else if (letra === "e") {
      return "enter";
    } else if (letra === "i") {
      return "imes";
    } else if (letra === "o") {
      return "ober";
    } else if (letra === "u") {
      return "ufat";
    }
  });

  return mensajeEncriptado;
}

function desencriptar(string) {
  let mensajeDesencriptado = string.value.replace(/ai|enter|imes|ober|ufat/g, function (palabra) {
      if (palabra === "ai") {
        return "a";
      } else if (palabra === "enter") {
        return "e";
      } else if (palabra === "imes") {
        return "i";
      } else if (palabra === "ober") {
        return "o";
      } else if (palabra === "ufat") {
        return "u";
      }
    }
  );
  return mensajeDesencriptado;
}

function copiarAlPortapapeles() {
  navigator.clipboard.writeText(mensajeResultado.innerText);
  swal({
    title: "¡Mensaje copiado!",
    icon: "success",
  });
}

btnEncriptar.addEventListener("click", () => {
  
  if (validarTexto(mensaje.value)) {
    mensajeResultado.textContent = encriptar(mensaje);
    mensajeResultado.style.display = "block";
    contenedorReferencia.style.display = "none";
    mensaje.value = "";
    btnCopiar.style.display = "block";
  } else {
    swal({
      title: "Oops! 🙄",
      text: "¡No se permiten letras mayúsculas ni caracteres especiales!",
      icon: "error",
    });
  }
});

// btnCopiar.addEventListener("click", () => {
//   mensajeResultado.select();
//   mensajeResultado.setSelectionRange(0, 99999);
//   navigator.clipboard.writeText(mensajeResultado.value);
//   alert("Se copió el texto");
// })

btnDesencriptar.addEventListener("click", () => {
  mensajeResultado.textContent = desencriptar(mensaje);
  mensaje.value = "";
})

btnCopiar.addEventListener('click', copiarAlPortapapeles);
