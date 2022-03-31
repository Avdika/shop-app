import { useState } from 'react';
import { Container, Wrapper, Title, Form, Input, Button, Link, Error } from './Styles/login';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (ev) => {
    ev.preventDefault();
    login(dispatch, { userName, password });
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(ev) => setUserName(ev.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Smth wrong</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
