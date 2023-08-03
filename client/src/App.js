import { useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar/Navbar';
import {Landing, Form, Home, Detail} from './views'

import './App.css';

function App() {

  const location = useLocation()
  
  return (
    <div className="App">
      {/* Con esto condiciono que la NavBar no aparezca en la landing */}
      {location.pathname !== '/' && <NavBar />} 
      
      {/* Una forma de definir rutas */}
      <Route exact path='/'>
        <Landing />
      </Route>

      {/* Otra forma de definir rutas, no se le pueden pasar props*/}
      <Route path='/home' component={Home} />

      {/* 'Mejor' forma de definir rutas */}
      <Route path='/detail/:id' render={() => <Detail unaProp='valor' />}/>
      <Route path='/form' render={() => <Form />}/>
    </div>
  );
}

export default App;
