import { GlobalStyle } from 'GlobalStyle';
import Login from 'pages/Login';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Login />
    </div>
  );
}

export default App;
