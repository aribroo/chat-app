import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { registerUser } from '../utils/service';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) return navigate('/');
  }, [navigate, user]);

  const [registerError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError(null);
    setIsRegisterLoading(true);

    const response = await registerUser(registerData);

    setIsRegisterLoading(false);
    if (response.errors) return setRegisterError(response);

    setRegisterError(false);
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <Form onSubmit={(e) => handleRegister(e)}>
      <Row className="justify-content-center" style={{ height: '100vh', paddingTop: '5%' }}>
        <Col xs={5}>
          <Stack gap={3}>
            <h2>Register</h2>

            <Form.Control type="text" placeholder="name" required onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} />

            <Form.Control type="email" placeholder="email" required onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} />

            <Form.Control type="password" placeholder="password" required onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} />

            {isRegisterLoading ? (
              <Button variant="primary" type="submit" disabled>
                Creating your account
              </Button>
            ) : (
              <Button variant="primary" type="submit">
                Register
              </Button>
            )}

            {registerError === false && (
              <Alert variant="success">
                <p className="text-center fw-semibold ">Register Success </p>
              </Alert>
            )}

            {registerError?.errors && (
              <Alert variant="danger">
                <span className="text-center fw-semibold ">{registerError.errors}</span>
              </Alert>
            )}

            {}
          </Stack>
        </Col>
      </Row>
    </Form>
  );
};

export default Register;
