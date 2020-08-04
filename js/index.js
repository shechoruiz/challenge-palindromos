let obtenerInfo = function () {
  let info = document.getElementById("word").value;
  info = info.toLowerCase().replace(/ /g, "");

  let palabra1 = info.split("");
  let palabra2 = info.split("").reverse();

  for (i in palabra1) {
    if (palabra1[i] === palabra2[i]) {
      document.getElementById("response").innerText =
        "Esta frase/palabra es palindroma!";
    } else {
      document.getElementById("response").innerText =
        "Esta frase/palabra no es palindroma";
    }
  }
  console.log(palabra1); //Prueba de impresión
  console.log(palabra2); //Prueba de impresion
};
