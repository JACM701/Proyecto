import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Enrollment from './components/Enrollment';
import Grades from './components/Grades';
// Importa otros componentes según sea necesario

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/enrollment" component={Enrollment} />
          <Route path="/grades" component={Grades} />
          {/* Agrega rutas para otros componentes */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
