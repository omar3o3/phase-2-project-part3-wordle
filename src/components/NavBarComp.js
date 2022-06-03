import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function NavBarComp() {
  return (
    <div >
      <Navbar bg='light' sticky="top">
        <Container className='justify-content-center fs-3'>
          <Navbar.Brand className='fs-3'>NavBar:</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/'>Game</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/wotd'>Learn-A-New-Word</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarComp