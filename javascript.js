String.prototype.replaceAt = function (index, character) {
  return (
    this.substring(0, index) +
    character +
    this.substring(index + character.length)
  );
};

const palabras = [
  "casa",
  "perro",
  "gato",
  "elefante",
  "ordenador",
  "laurel",
  "plaza",
  "ceereza",
  "cerveza",
  "uruguay",
  "jirafa",
  "pastel",
  "carrera",
  "colegio",
  "universidad",
  "mermelada",
];

const palabra = palabras[Math.floor(Math.random() * palabras.length)];

let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos = 0;
document.querySelector("#output").innerHTML = palabraConGuiones;
document.querySelector("#calcular").addEventListener("click", () => {
  const letra = document.querySelector("#letra").value.toLowerCase();
  let haFallado = true;
  for (const i in palabra) {
    if (letra == palabra[i]) {
      palabraConGuiones = palabraConGuiones.replaceAt(
        i * 2,
        letra.toUpperCase()
      );
      haFallado = false;
    }
  }
  if (haFallado) {
    contadorFallos++;
    document.querySelector("#ahorcado").style.backgroundPosition =
      -(307 * contadorFallos) + "px 0";
    if (contadorFallos >= 5) {
      document.querySelector("#perdedor").style.display = "flex";
      setTimeout(() => {
        location.reload();
      }, "3500");
    }
  } else {
    if (palabraConGuiones.indexOf("_") < 0) {
      document.querySelector("#ganador").style.display = "flex";
      setTimeout(() => {
        location.reload();
      }, "2000");
    }
  }

  document.querySelector("#output").innerHTML = palabraConGuiones.toUpperCase();

  document.querySelector("#letra").value = "";
  document.querySelector("#letra").focus();
});

let refresh = document.getElementById("refresh");
refresh.addEventListener("click", (_) => {
  location.reload();
});

let refresh2 = document.getElementById("refresh2");
refresh2.addEventListener("click", (_) => {
  location.reload();
});
