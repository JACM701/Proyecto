import React from 'react';

function Home() {
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
        <section id="home">
          <h2>Inicio</h2>
          <p>Bienvenido al sistema de control escolar. Aquí puedes gestionar la información de estudiantes y cursos.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Control Escolar</p>
      </footer>
    </div>
  );
}

export default Home;
