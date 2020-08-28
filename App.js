import React from 'react';

//COMPONENTE ROUTER APP
import {store} from './redux/stores/store'
import Router from './router/Router'

//REDUX THUNK
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

