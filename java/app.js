class Tarea {
    constructor(descripcion) {
        this.descripcion = descripcion;
        this.completada = false;
    }

    toggleCompletada() {
        this.completada = !this.completada;
    }
}


class ListaTareas {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(descripcion) {
        const tarea = new Tarea(descripcion);
        this.tareas.push(tarea);
        this.mostrarTareas();
    }

    eliminarTarea(index) {
        this.tareas.splice(index, 1);
        this.mostrarTareas();
    }

    mostrarTareas() {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        this.tareas.forEach((tarea, index) => {
            const li = document.createElement('li');
            li.textContent = tarea.descripcion;

            if (tarea.completada) {
                li.style.textDecoration = 'line-through';
            }

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => this.eliminarTarea(index));

            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    }
}


const listaTareas = new ListaTareas();


document.getElementById('taskForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const descripcion = taskInput.value.trim();

    if (descripcion) {
        listaTareas.agregarTarea(descripcion);
        taskInput.value = '';
    }
});
