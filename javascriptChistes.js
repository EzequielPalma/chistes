function contarChistes() {
  var chistes = [
    "¿Cómo se llama un pez con espinas? ¡Estrella de mar!",
    "¿Por qué los pájaros no usan Facebook? ¡Porque ya tienen Twitter!",
    "¿Cual es el colmo de Aladino? Tener mal genio.",
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
    "¿Cómo se dice pañuelo en japonés? ¡Saka-moko!",  
    "¿Cómo organiza una fiesta un programador? ¡Haciendo un JavaScript!",   
    "¿Cuál es el colmo de un jardinero? ¡Tener mala planta!",
    
  ];

  var chisteAleatorio = chistes[Math.floor(Math.random() * chistes.length)];

  var contenedorChiste = document.getElementById("contenedor-chiste");

  contenedorChiste.innerHTML = "<h1>Chiste del día: " + chisteAleatorio + "</h1>";
}



contarChistes();
