
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

function mostrarMensaje() {
    alert("Tqm 💗");
}

button1.addEventListener('click', mostrarMensaje);
    
function moverBoton(event) {
    let rect = button2.getBoundingClientRect();

    let nuevoLeft = Math.random() * (window.innerWidth - rect.width);
    let nuevoTop = Math.random() * (window.innerHeight - rect.height);

    // Asegurar que el botón no se mueva fuera del área visible
    nuevoLeft = Math.min(Math.max(nuevoLeft, 0), window.innerWidth - rect.width);
    nuevoTop = Math.min(Math.max(nuevoTop, 0), window.innerHeight - rect.height);

    button2.style.left = nuevoLeft + 'px';
    button2.style.top = nuevoTop + 'px';
}

button2.addEventListener('mouseover', moverBoton);