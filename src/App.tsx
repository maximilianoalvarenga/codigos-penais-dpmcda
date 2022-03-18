import { GlobalStyle } from 'GlobalStyle';
import React from 'react';
import { Provider } from 'react-redux';
import Routes from 'routes';
import store from 'store';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Provider store={ store }>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
