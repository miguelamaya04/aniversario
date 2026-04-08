function mostrarContenido() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("contenido").style.display = "block";
}

const mensaje = "Feliz aniversario, mi gema corazón ❤️ Gracias por estar conmigo por ya tantos años, por soportarme, por amarme por quien soy, por ser mi confidente, quien me apoya en todo momento... Gracias por tanto, de verdad, es imposible describir en palabras lo mucho que le agradezco a Dios haberme permitido conocerte. Te amo, mi amor. Eres lo mejor que me ha pasado en la vida, y espero que podamos seguir compartiendo momentos tan buenos y divertidos juntos por muchos años más (quizá hasta la muerte, jeje). ¡Feliz aniversario, mi gema corazón! 💕 Sabes, realmente no sabía que podría sorprenderte o ser digno como detalle para segundo aniversario. Lo pensé mucho y durante muchos días. Hasta que encontré una respuesta, ¡esto! Nada como un sitio web dedicado especificamente para nuestro día especial 7u7 espero que te haya gustado la foto edit de esta mañana, mientras terminaba de escribir codigo que yo mismo desconozco me dí cuenta que ya eran las doce, y quería ser el primero en celebrar este día tan especial con un pequeño detalle. Espero algún día, esa foto no sea un edit, sea real. Una foto donde tú y yo estemos abrazados en la playa.";

let i = 0;


function escribirTexto() {
  if (i < mensaje.length) {
    document.getElementById("texto").innerHTML += mensaje.charAt(i);
    i++;
    setTimeout(escribirTexto, 50);
  }
}

function iniciarCarta() {
  const boton = document.querySelector("button");
  boton.disabled = true;

  document.getElementById("texto").innerHTML = "";
  i = 0;
  escribirTexto();
}