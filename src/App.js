import React from 'react';

import GlobalStyle from './styles/global';
import Rotas from './routes';

import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Rotas />
    </HashRouter>
  );
}

export default App;
