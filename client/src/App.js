import React from 'react';

//redux 
import { Provider } from 'react-redux';
import store from './store';
import MenuList from './components/MenuList';
import Cart from './components/Cart';

import './styles/main.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex-container">
        <MenuList />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
