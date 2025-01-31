import React, { useContext } from 'react'
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { WebContext } from '../../App';
import { Link } from 'react-router-dom';
function NavBar() {
  const data = useContext(WebContext);
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        {data?.logo?.map((val, index) =>
            <Navbar.Brand key={index}>
              <div>
                <Link to='/'>
                  <Image src={val.logoImgurl} alt={val.id} style={{ maxHeight: '190px', maxWidth: '190px' }} />
                </Link>
              </div>
            </Navbar.Brand>
          )}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar