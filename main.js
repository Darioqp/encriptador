function validarTexto() {
  let texto = document.getElementById('caja-texto').value;
  const regex1 = /[A-Z]/;
  const regex2 = /[(\u00C0-\u017F\)]/;

//   console.log(regex.test(texto));


//   console.log(texto);

  if (regex1.test(texto)) {
    alert("¡Debes ingresar el texto en minúsculas!");
  } else if (regex2.test(texto)){
    alert("¡No se pueden incluir acentos en el texto!")
  } else {
    console.log("Texto validado")
  }
}
