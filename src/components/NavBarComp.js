import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function NavBarComp() {
  return (
    <div >
      <Navbar bg='light' sticky="top">
        <Container className='justify-content-center'>
          <Navbar.Brand >NavBar:</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/' >Game</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/wotd' >Word of the Day</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarComp