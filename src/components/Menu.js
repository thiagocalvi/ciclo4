import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,

} from 'reactstrap';

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color='info' dark expand='md'>
                <Container className='d-flex'>
                    <NavbarBrand href='/'>TI Academy</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar className="d-flex flex-row-reverse">
                        <Nav className='mr-auto' navbar>
                            <NavItem>
                                <NavLink href='/'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/listar-clientes'>Clientes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/listar-pedidos'>Pedidos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/listar-servicos'>Serviços</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/listar-compras'>Compras</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/listar-produtos'>Produtos</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
};