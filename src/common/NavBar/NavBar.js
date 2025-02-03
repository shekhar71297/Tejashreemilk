import React, { useContext } from 'react'
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { WebContext } from '../../App';
import { Link } from 'react-router-dom';
import './nav.css'
function NavBar() {
  const data = useContext(WebContext);
  return (
    <div>


      <hr className='hr-size' ></hr>
      <Navbar className='navbar-theam'>
        <Container>
          {/* {data?.logo?.map((val, index) =>
            <Navbar.Brand key={index}>
              <div>
                <Link to='/'>
                  <Image src={val.logoImgurl} alt={val.id} style={{ maxHeight: '190px', maxWidth: '190px' }} />
                </Link>
              </div>
            </Navbar.Brand>
          )} */}
          <Nav className="me-auto">
            <Link className='nav-link'  to="" >Home</Link>
            <Link  className='nav-link' to="/services" >Services</Link>
            <Link  className='nav-link' to="/contact-Us" >Contact</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar