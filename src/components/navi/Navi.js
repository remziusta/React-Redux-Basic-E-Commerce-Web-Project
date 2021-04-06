import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from '../cart/CartSummary'

export default class Navi extends Component {
  render() {
   
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Basic E-</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/saveproduct">Ürün Ekle</Link></NavLink>
              </NavItem>
              <CartSummary/>
            </Nav>            
          </Collapse>
          
        </Navbar>
      </div>
    );
  }
}
