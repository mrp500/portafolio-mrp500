//Haz tú validación en javascript acá

document.querySelector('.formcontato__form').addEventListener('submit', function(event) {
    const nombre = document.forms['form']['nombre'].value;
    const email = document.forms['form']['email'].value;
    const asunto = document.forms['form']['asunto'].value;
    const mensaje = document.forms['form']['mensaje'].value;

    // Expresión regular para validar el formato de correo electrónico
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexCaracteres = /^[a-zA-Z\s-]+$/;

    if (nombre.trim() === '' && email.trim() === '' && asunto.trim() === '' && mensaje.trim() === '') {
        alert('Por favor complete todos los campos.');
        event.preventDefault();
    } else if (nombre.trim() === '') {
        alert('Por favor ingrese su nombre.');
        event.preventDefault(); 
    } else if (!regexCaracteres.test(nombre)) {
        alert('El campo de nombre solo puede contener letras, espacios y guiones.');
        event.preventDefault();
    } else if (email.trim() === '') {
        alert('Por favor ingrese su correo electrónico.');
        event.preventDefault();
    } else if (!regexEmail.test(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
        event.preventDefault();
    } else if (asunto.trim() === '') {
        alert('Por favor ingrese el asunto del mensaje.');
        event.preventDefault();
    } else if (!regexCaracteres.test(asunto)) {
        alert('El campo de asunto solo puede contener letras, espacios y guiones.');
        event.preventDefault();
    } else if (mensaje.trim() === '') {
        alert('Por favor ingrese su mensaje.');
        event.preventDefault();
    } else {
        // Aquí envia el formulario si todas las validaciones pasan
    }
});
