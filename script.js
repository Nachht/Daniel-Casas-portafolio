const botonMenu = document.querySelector(".boton-menu");
const menu = document.querySelector(".menu");

botonMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-abierto");
});

//Contacto
const formulario = document.getElementById("formulario-contacto");
const mensaje = document.getElementById("mensajeFormulario");
const boton = document.getElementById("btnEnviar");

formulario.addEventListener("submit", async (e) => {

    e.preventDefault();
    boton.disabled = true;
    boton.textContent = "Enviando...";

    const datos = new FormData(formulario);

    try {
        const respuesta = await fetch(formulario.action, {
            method: "POST",
            body: datos,
            headers: {
                Accept: "application/json"
            }
        });

        if (respuesta.ok) {
            mensaje.style.color = "#62ff8e";
            mensaje.textContent = "✓ ¡Mensaje enviado correctamente!";
            formulario.reset();

        } else {
            mensaje.style.color = "#ff7272";
            mensaje.textContent = "No se pudo enviar el mensaje.";
        }

    } catch {
        mensaje.style.color = "#ff7272";
        mensaje.textContent = "Error de conexión.";
    }

    boton.disabled = false;
    boton.textContent = "Enviar mensaje 🚀";
});