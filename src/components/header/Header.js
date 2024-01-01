import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/images/burger-logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className='navbar-bg' data-bs-theme='dark'>
        <Container>
            <Navbar.Brand href='#home'>
                <div className='nav-logo'>
                    <img src={logo} alt='burger-logo' height={30} width={40} />
                </div>
            </Navbar.Brand>
            <Nav>
                <Link className='nav-link' to='/'>Burger Builder</Link>
                <Link className='nav-link' to='login'>Login</Link>
            </Nav>
        </Container>
    </Navbar>
  );
}

export default Header;
