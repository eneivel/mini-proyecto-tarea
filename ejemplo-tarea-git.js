let tareas = [];
let siguienteId = 1;

function agregarTarea(texto) {
    tareas.push({id: siguienteId, texto: texto, hecha: false});
    siguienteId++;
}

function mostrarTareas() {
    for (let tarea of tareas) {
        console.log(`${tarea.id}, ${tarea.texto}, [${tarea.hecha ? "hecha" : "pendiente"}]`);
    }
}

function completarTarea(id) {
    for (let tarea of tareas) {
        if (tarea.id === id) {
            tarea.hecha = true;
        }
    }
}

function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
}

agregarTarea("Estudiar JavaScript");
agregarTarea("Subir proyecto a GitHub");
completarTarea(1);
mostrarTareas();
