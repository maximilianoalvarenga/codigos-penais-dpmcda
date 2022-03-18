import React from 'react';
import FormLogin from './FormLogin';
import { Container, Content, Logo } from './style';

const Login: React.FC = () => {
  return (
      <Container>
        <Content>
          <Logo />
          <FormLogin />
        </Content>
      </Container>
  );
}

export default Login;
