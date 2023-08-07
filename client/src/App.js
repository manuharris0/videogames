import './App.css';

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import axios from 'axios';
import { Landing } from './Views/Landing/Landing';
import { Home } from './Views/Home/Home';
import { Detail } from './Views/Detail/Detail';
import { Form } from './Views/Form/Form';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;