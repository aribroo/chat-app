import { useContext } from 'react';
import { Nav, Navbar, Container, Stack } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const NavigationBar = () => {
  const { user, setUser } = useContext(AuthContext);

  console.log(user);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Navbar bg="dark" className="mb-3">
      <Container>
        <h3>
          <Link to={'/'} className="link-light text-decoration-none text-white">
            ChatApp
          </Link>
        </h3>
        {user ? <span className="text-warning">Logged in as {user.name}</span> : ''}

        {!user ? (
          <Nav>
            <Stack direction="horizontal" gap={3}>
              <NavLink
                to={'/login'}
                className="text-decoration-none"
                style={({ isActive }) => {
                  return {
                    color: isActive ? '#ffc107' : 'white'
                  };
                }}
              >
                Login
              </NavLink>
              <NavLink
                to={'/register'}
                className="text-decoration-none"
                style={({ isActive }) => {
                  return {
                    color: isActive ? '#ffc107' : 'white'
                  };
                }}
              >
                Register
              </NavLink>
            </Stack>
          </Nav>
        ) : (
          <Nav>
            <Stack direction="horizontal" gap={3}>
              <NavLink to={'/login'} className="text-decoration-none link-light" onClick={handleLogout}>
                Logout
              </NavLink>
            </Stack>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
