import React from 'react';

function Enrollment() {
  return (
    <div>
      <header>
        <h1>Control Escolar</h1>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/enrollment">Inscripción</a></li>
            <li><a href="/grades">Calificaciones</a></li>
            {/* Agrega otros enlaces según sea necesario */}
          </ul>
        </nav>
      </header>
      <main>
        <section id="enrollment">
          <h2>Inscripción y Registro de Estudiantes</h2>
          <form id="enrollment-form">
            <label htmlFor="student-name">Nombre del Estudiante:</label>
            <input type="text" id="student-name" name="student-name" required /><br />
            <label htmlFor="student-age">Edad:</label>
            <input type="number" id="student-age" name="student-age" required /><br />
            <label htmlFor="student-grade">Grado:</label>
            <input type="text" id="student-grade" name="student-grade" required /><br />
            <button type="submit">Registrar</button>
          </form>
          <p>Procesar pagos y facturación en tiempo real estará disponible próximamente.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Control Escolar</p>
      </footer>
    </div>
  );
}

export default Enrollment;
