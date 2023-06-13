import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './components/theme';

import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ChakraProvider theme={theme}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </PersistGate>
  </Provider>
);
