import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from './component/Context/Context';

import { ModalProvider } from './component/Context/ModalContenxt';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
