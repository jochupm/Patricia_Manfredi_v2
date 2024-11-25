import React from "react";
import { Flex, Box, Image, Link } from "@chakra-ui/react";
import logo from "/Users/josep/Web_Development/Patricia_Manfredi/img/Patricia Manfredi Logo.png";
import "/Users/josep/Web_Development/Patricia_Manfredi/style/style.css";

const NavBar = () => {
  return (
    <Flex className="navbar-container">
      {/* Logo */}
      <Link href="/" className="navbar-logo">
        <Image src={logo} alt="Logo Patricia Manfredi" className="logo" />
      </Link>

      {/* Menu */}
      <Flex className="navbar-links">
        <Link href="/cursos" className="navbar-link">
          Cursos Online
        </Link>
        <Link href="/moldeteca" className="navbar-link">
          Moldeteca
        </Link>
        <Link href="/merceria" className="navbar-link">
          Mercería
        </Link>
        <Link href="/quienes-somos" className="navbar-link">
          Quiénes Somos
        </Link>
        <Link href="/blog" className="navbar-link">
          Blog
        </Link>
      </Flex>
    </Flex>
  );
};

export default NavBar;