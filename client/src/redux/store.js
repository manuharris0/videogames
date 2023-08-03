// Redux nos facilita un estado global:
    // Objeto con información, donde cualqueir componente puede hacer uso
    // El reducer es la única función que está "autorizada" a modificar el estado local:
        // Esto lo hace a partir de las actions 
// Cada componente recibe "props" externamente
// Los componentes internamente manejan un estado interno (propio de cada uno de los componentes)

import { createStore, applyMiddleware, compose } from 'redux';
// El primero crea el store, el segundo y tercero permiten mejorar el store
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
// Esto ayuda con las operaciones asíncronas

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    // thunkMiddleware es el que hace las requests
);

export default store;