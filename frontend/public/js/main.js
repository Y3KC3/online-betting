document.addEventListener('DOMContentLoaded', () => { // Esperamos que todo el HTML se cargue y luego ejecutamos la sentencia
    const options = { // Creamos las opciones en un objecto
        strings: [
            '<i class="socialNetworks">Facebook</i>',
            '<i class="socialNetworks">Twetter</i>',
            '<i class="socialNetworks">Instagram</i>',
            '<i class="socialNetworks">Youtube</i>',
            '<i class="socialNetworks">Telegram</i>'
        ], // Lo que va a salir en el html
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 70, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
    }

    const typed = new Typed('.typed', options); //aqui es donde lo inicializamos, agarramos la clase de la etiqueta en react y luego le pasamos las opciones
});