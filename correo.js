/* ----------------------------
   CÓDIGO DE EMAILJS
-----------------------------*/

emailjs.init("Y-HCaKfHYv68HFFTA"); // tu PUBLIC KEY

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contactForm");
    const messageBox = document.getElementById("formMessage");

    // --- EVITA EL ERROR SI EL FORM NO EXISTE ---
    if (!form) {
        console.warn("contactForm NO EXISTE EN ESTA PÁGINA");
        return;
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm("service_1w3fu2q", "template_5zgutm6", this)
            .then(() => {
                messageBox.textContent = "✨ Mensaje enviado correctamente. ¡Gracias!";
                messageBox.style.color = "green";
                form.reset();
            })
            .catch((err) => {
                messageBox.textContent = "❌ Error al enviar. Intenta nuevamente.";
                messageBox.style.color = "red";
                console.error(err);
            });
    });
});
