import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap'
import React from 'react'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <div>
        <Navbar color='light' light expand='md' className='fixed-top'>
          <NavbarBrand href='/'>
            <img
              className='m-0 p-0'
              src='https://firebasestorage.googleapis.com/v0/b/santren-koding.appspot.com/o/santrenkoding_logo.png?alt=media&token=83a08081-4259-4b18-8600-c70af12d89bc'
              width='46px'
            />
            Santren Koding
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='#'>Kajian Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Mondok Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Kitab Koding</NavLink>
              </NavItem>
              <NavItem>
                <Button outline color='primary'>
                  Masuk/Daftar
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
export default Header