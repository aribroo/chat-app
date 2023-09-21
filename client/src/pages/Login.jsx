import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { loginUser } from '../utils/service';
import { AuthContext } from '../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate, Navigate } from 'react-router-dom';

const Login = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) return navigate('/');
  }, [navigate, user]);

  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState(null);
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoginLoading(true);
    const response = await loginUser(formLogin);

    setIsLoginLoading(false);
    if (response.errors) return setErrorLogin(response.errors);

    const decoded = jwt_decode(response.data.token);

    localStorage.setItem('user', JSON.stringify(decoded));
    setUser(decoded);
    navigate('/');
  };

  return (
    <Form onSubmit={(e) => handleLogin(e)}>
      <Row className="justify-content-center" style={{ height: '100vh', paddingTop: '5%' }}>
        <Col xs={5}>
          <Stack gap={3}>
            <h2>Login</h2>

            <Form.Control type="email" placeholder="email" required onChange={(e) => setFormLogin({ ...formLogin, email: e.target.value })} />

            <Form.Control type="password" placeholder="password" required onChange={(e) => setFormLogin({ ...formLogin, password: e.target.value })} />

            {isLoginLoading ? (
              <Button variant="primary" type="submit" disabled>
                Login
              </Button>
            ) : (
              <Button variant="primary" type="submit">
                Login
              </Button>
            )}

            {errorLogin && (
              <Alert variant="danger">
                <p className="text-center fw-semibold">{errorLogin}</p>
              </Alert>
            )}
          </Stack>
        </Col>
      </Row>
    </Form>
  );
};

export default Login;
