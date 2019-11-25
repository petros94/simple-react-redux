import React from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from 'history';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme';
import { configureStore } from './store';
import routes from './routes';
import './assets/scss/main.scss';


const history = createBrowserHistory();
const store = configureStore();

function App() {

  return (
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            {renderRoutes(routes)}
          </Router>
        </ThemeProvider>
      </StoreProvider>
  );
}

export default App;
