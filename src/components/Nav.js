import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

function BasicExample() {
    const { logOut } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };

    return (
      <>  
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#Profile"> Profile </Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">
              <IconButton variant="primary" onClick={handleLogout}>
                    <LogoutIcon/>
              </IconButton>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }


export default BasicExample;