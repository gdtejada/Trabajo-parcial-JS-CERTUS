/* cargando antes de ejecutar Javascript */
$(document).ready(function () {
    $('#registroUsuario').submit(function (event) {
        /* prevencion de mandar el formulario automaticamente */
        event.preventDefault();

        /* valores del formulario */
        var nombre = $('#txtNombre').val();
        var apellido = $('#txtApellido').val();
        var correo = $('#txtemail').val();
        var genero = $('#genero').val();
        var fecha_nacimiento = $('#txtdate').val();

        /* validacion de datos */
        if (nombre === '' || apellido === '' || correo === '' || genero === '' || fecha_nacimiento === '') {
            alert('Complete todos los datos en el formulario');
            return;
        }

        /* Confirmacion para enviar datos */
        if (!confirm('Está seguro de enviar sus datos?')) {
            return;
        }
        /* Mensaje confirmando que el formulario se envio correctamente */
        alert('Sus datos se enviaron correctamente. Gracias!');
    });
});

