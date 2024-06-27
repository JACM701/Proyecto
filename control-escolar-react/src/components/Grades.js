import React from 'react';

function Grades() {
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
        <section id="grades">
          <h2>Gestión de Calificaciones</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Materia</th>
                <th>Calificación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Juan Pérez</td>
                <td>Matemáticas</td>
                <td>90</td>
              </tr>
              <tr>
                <td>2</td>
                <td>María López</td>
                <td>Ciencias</td>
                <td>85</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Control Escolar</p>
      </footer>
    </div>
  );
}

export default Grades;
