const URL = "https://script.google.com/macros/s/AKfycbzuLKEYFb2idPggVYneEp00X4m4QkQ3gY079qD-M1SEbiR_XT80-eo0JLftl6bIbFPV6g/exec";

// ====== CONTRASEÑA ======
const PASSWORD = "WarRoom2026"; // <-- Cambia aquí tu contraseña

function validarPassword() {

    const pass = document.getElementById("password").value;

    if (pass === PASSWORD) {

        document.getElementById("login").style.display = "none";
        document.getElementById("contenido").style.display = "block";

    } else {

        document.getElementById("mensajeError").textContent = "❌ Contraseña incorrecta";
        document.getElementById("password").value = "";
        document.getElementById("password").focus();

    }

}

// ====== BUSCAR ======

function buscar() {

    let texto = document.getElementById("buscar").value;

    fetch(URL + "?buscar=" + encodeURIComponent(texto))

    .then(res => res.json())

    .then(data => {

        let div = document.getElementById("resultado");

        if (data.encontrado) {

            div.innerHTML = `

            <div class="card">

                <h2>${data.A}</h2>

                <div class="persona">

                    <div class="encabezado">
                        👨‍💼 Supervisor
                    </div>

                    <div class="nombre">
                        ${data.B}
                    </div>

                    <div class="telefono">
                        📞 ${data.C}
                    </div>

                </div>

                <div class="persona">

                    <div class="encabezado">
                        👨‍💼 Jefe de COPE
                    </div>

                    <div class="nombre">
                        ${data.D}
                    </div>

                    <div class="telefono">
                        📞 ${data.E}
                    </div>

                </div>

                <div class="persona">

                    <div class="encabezado">
                        👨‍💼 GOA
                    </div>

                    <div class="nombre">
                        ${data.F}
                    </div>

                    <div class="telefono">
                        📞 ${data.G}
                    </div>

                </div>

                <div class="comentarios">

                    <strong>📝 Comentarios</strong>

                    <p>${data.H}</p>

                </div>

            </div>

            `;

        } else {

            div.innerHTML = "<div class='error'>No se encontró información.</div>";

        }

    })

    .catch(error => {

        console.error(error);

        document.getElementById("resultado").innerHTML =
            "<div class='error'>Error al consultar la información.</div>";

    });

}
