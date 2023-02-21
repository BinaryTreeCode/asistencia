function generarTexto() {
    // Obtenemos la hora seleccionada
    var horaSelect = document.getElementById("hora-select");
    var horaSeleccionada = horaSelect.options[horaSelect.selectedIndex].value;

    // Obtenemos los nombres seleccionados
    var nombresSeleccionados = document.getElementsByName("asistente[]");
    var nombres = [];
    for (var i = 0; i < nombresSeleccionados.length; i++) {
        if (nombresSeleccionados[i].checked) {
            nombres.push(nombresSeleccionados[i].value);
        }
    }

    // Generamos el texto
    var textoGenerado = "Asistieron a la misa de " + horaSeleccionada + ": " + nombres.join(", ");

    // Mostramos el texto generado en la página
    document.getElementById("texto-generado").textContent = textoGenerado;

    // Copiamos el texto generado al portapapeles
    var textoParaCopiar = document.createElement("textarea");
    textoParaCopiar.value = textoGenerado;
    document.body.appendChild(textoParaCopiar);
    textoParaCopiar.select();
    document.execCommand("copy");
    document.body.removeChild(textoParaCopiar);
}