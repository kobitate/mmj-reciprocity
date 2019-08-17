import React, { Component } from 'react'
import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Alert,
  Collapse,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/pro-solid-svg-icons'

export default class MainTemplate extends Component {
  render () {
    return (
      <Container>
        <Navbar expand='xs'>
          <NavbarBrand>MMJ Reciprocity</NavbarBrand>
          <Collapse isOpen navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink>
                  <FontAwesomeIcon icon={faCircle} style={{ color: 'limegreen' }} className='mr-1' />
                Medical w/ Reciprocity
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <FontAwesomeIcon icon={faCircle} style={{ color: 'green' }} className='mr-1' />
                Medical w/ no Reciprocity
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <FontAwesomeIcon icon={faCircle} style={{ color: '#d3d3d3' }} className='mr-1' />
                No Medical
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {this.props.children}
        <Row>
          <Col>
            <Alert className='text-center' color='light'>
              For reference purposes only, not to be considered legal advice.<br />
              I am not a lawyer, just a stoner programmer. <br />
              Submit corrections as an Issue or Merge Request on <a href='https://gitlab.com/kaitiggy/mmj-reciprocity'>GitLab</a>, or <a href='mailto:hi@kaitiger.tech'>Email Me</a>.
            </Alert>
          </Col>
        </Row>
      </Container>
    )
  }
}
