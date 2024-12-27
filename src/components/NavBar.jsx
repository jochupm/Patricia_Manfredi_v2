import React from "react";
import CartWidget from './CartWidget';
import { Flex, Box, Image, Link, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons"; // Dropdown icon
import logo from "/Users/josep/Web_Development/Patricia_Manfredi/img/Patricia Manfredi Logo.png";
import "/Users/josep/Web_Development/Patricia_Manfredi/style/style.css";

const NavBar = () => {
  return (
    <Flex className="navbar-container" >
      {/* Logo */}
      <Link href="/" className="navbar-logo">
        <Image src={logo} alt="Logo Patricia Manfredi" className="logo" />
      </Link>

      {/* Menu */}
      <Flex className="navbar-links" >
        {/* Dropdown for Cursos */}
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} className="navbar-link">
            Cursos Online
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} href="/category/lenceria">
              Lencería
            </MenuItem>
            <MenuItem as={Link} href="/category/corte-y-confeccion">
              Corte y Confección
            </MenuItem>
            <MenuItem as={Link} href="/category/danza">
              Danza
            </MenuItem>
            <MenuItem as={Link} href="/category/">
              Todos
            </MenuItem>
          </MenuList>
        </Menu>

        <Link href="/moldeteca" className="navbar-link">
          Moldeteca
        </Link>
        <Link href="/quienes-somos" className="navbar-link">
          Quiénes Somos
        </Link>
        <Link href="/blog" className="navbar-link">
          Blog
        </Link>
        <Link href="/contacto" className="navbar-link">
          Contacto
        </Link>
        <CartWidget />

      </Flex>
    </Flex>
  );
};

export default NavBar;