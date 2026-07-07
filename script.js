alert("Script cargado");

fetch("directorio.json")
  .then(response => response.json())
  .then(datos => {

    const contenedor = document.getElementById("contenedor");

    for (const region in datos) {

      const div = document.createElement("div");
      div.className = "region";

      const titulo = document.createElement("h2");
      titulo.textContent = region;

      div.appendChild(titulo);

      for (const ciudad in datos[region]) {

        const boton = document.createElement("button");
        boton.textContent = ciudad;

        boton.onclick = () => mostrarUbicaciones(ciudad, datos[region][ciudad]);

        div.appendChild(boton);
      }

      contenedor.appendChild(div);
    }

  });

function mostrarUbicaciones(ciudad, ubicaciones) {

  let texto = ciudad + "\n\n";

  for (const ubicacion in ubicaciones) {
    texto += "• " + ubicacion + "\n";
  }

  alert(texto);

}
