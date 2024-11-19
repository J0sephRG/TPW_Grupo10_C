document.addEventListener('DOMContentLoaded', function () {
    const btnPreinscripcion = document.querySelector('.btn-preinscripcion');
    const tablaInscripciones = document.querySelector('#tablaInscripciones tbody');
    const disciplinaSelect = document.getElementById('disciplina');
    const tablaHorarios = document.getElementById('tablaHorarios');
    let horarioSeleccionado = ''; // Variable para almacenar el horario seleccionado
  
    // Función para mostrar u ocultar la tabla de horarios según la disciplina seleccionada
    disciplinaSelect.addEventListener('change', mostrarHorarios);
  
    // Función para manejar la preinscripción
    btnPreinscripcion.addEventListener('click', function () {
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const correo = document.getElementById('correo').value;
      const disciplina = document.getElementById('disciplina').value;
  
      // Validación básica
      if (!nombre || !apellido || !correo || disciplina === '-- Seleccionar --' || !horarioSeleccionado) {
        alert("Por favor, completa todos los campos y selecciona un horario.");
        return;
      }
  
      // Agregar la inscripción a la tabla
      const nuevaFila = document.createElement('tr');
      nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${correo}</td>
        <td>${disciplina}</td>
        <td>${horarioSeleccionado}</td>
      `;
      tablaInscripciones.appendChild(nuevaFila);
  
      // Limpiar los campos después de registrar
      document.getElementById('nombre').value = '';
      document.getElementById('apellido').value = '';
      document.getElementById('correo').value = '';
      document.getElementById('disciplina').value = '-- Seleccionar --';
      horarioSeleccionado = ''; // Limpiar la selección de horario
    });
  
    // Función para mostrar u ocultar la tabla de horarios
    function mostrarHorarios() {
      const disciplinaSeleccionada = disciplinaSelect.value;
      if (disciplinaSeleccionada !== '-- Seleccionar --') {
        tablaHorarios.style.display = 'block'; // Mostrar la tabla de horarios
      } else {
        tablaHorarios.style.display = 'none'; // Ocultar la tabla de horarios
      }
    }
  
    // Agregar evento para seleccionar un horario al hacer clic en una fila de la tabla de horarios
    tablaHorarios.addEventListener('click', function(event) {
      // Verificar si se ha hecho clic en una fila de la tabla de horarios
      if (event.target.tagName === 'TD') {
        const fila = event.target.parentNode; // Obtener la fila seleccionada
        horarioSeleccionado = fila.querySelector('td:last-child').textContent; // Obtener el horario de la última celda
        // Opcional: resaltar la fila seleccionada
        const filas = tablaHorarios.querySelectorAll('tr');
        filas.forEach(fila => fila.classList.remove('seleccionado')); // Eliminar resalte de filas previas
        fila.classList.add('seleccionado'); // Resaltar la fila seleccionada
      }
    });
  
    // Llamar a mostrarHorarios al cargar la página por si hay una disciplina seleccionada previamente
    mostrarHorarios();
  });
  