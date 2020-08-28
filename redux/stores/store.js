//IMPLEMENTANDO REDUX 
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/reducer';

//REDUX THUNK
import thunk from 'redux-thunk';

//EXPORTAMOS STORE
export const store = createStore(rootReducer, applyMiddleware(thunk));



