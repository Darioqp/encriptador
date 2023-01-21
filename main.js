function encriptarTexto() {
  let texto = document.getElementById("caja-texto").value;
  const regex = /[^a-z0-9\s]/;
  console.log(regex.test(texto));

  if (regex.test(texto)) {
    alert("¡No se permiten letras mayúsculas ni caracteres especiales!");
  } else {
    let textoEncriptado = texto.replace(/a|e|i|o|u/g, function(letra) {
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
    })
    console.log(textoEncriptado);
  }
}

function desencriptarTexto() {
  
}

//código separado en dos funciones

// function validarTexto(texto) {
//   const regex = /[^a-z0-9\s]/;
//   return !regex.test(texto);
// }

// function encriptarTexto() {
//   let texto = document.getElementById("caja-texto").value;

//   if (!validarTexto(texto)) {
//     alert("¡No se permiten letras mayúsculas ni caracteres especiales!");
//   } else {
//     let textoEncriptado = texto.replace(/a|e|i|o|u/gi, function(letra) {
//         switch (letra) {
//           case "a":
//             return "ai";
//           case "e":
//             return "enter";
//           case "i":
//             return "imes";
//           case "o":
//             return "ober";
//           case "u":
//             return "ufat";
//         }
//     });
//     console.log(textoEncriptado);
//   }
// }
