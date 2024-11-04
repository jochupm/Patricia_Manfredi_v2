import React from 'react';
import { Flex, Box, IconButton, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" className="footer-container">
      <Flex justify="center" mb={4} className="footer-social-icons">
        <IconButton
          as="a"
          href="https://facebook.com"
          aria-label="Facebook"
          icon={<FaFacebook />}
          size="lg"
          variant="ghost"
          className="footer-icon-button"
        />
        <IconButton
          as="a"
          href="https://instagram.com"
          aria-label="Instagram"
          icon={<FaInstagram />}
          size="lg"
          variant="ghost"
          className="footer-icon-button"
        />
        <IconButton
          as="a"
          href="https://whatsapp.com"
          aria-label="WhatsApp"
          icon={<FaWhatsapp />}
          size="lg"
          variant="ghost"
          className="footer-icon-button"
        />
        <IconButton
          as="a"
          href="https://youtube.com"
          aria-label="YouTube"
          icon={<FaYoutube />}
          size="lg"
          variant="ghost"
          className="footer-icon-button"
        />
      </Flex>

      <Flex justify="center" gap={8} className="footer-links">
        <Link href="/cursos-online" className="footer-link">
          Cursos Online
        </Link>
        <Link href="/presenciales" className="footer-link">
          Presenciales
        </Link>
        <Link href="/moldeteca" className="footer-link">
          Moldeteca
        </Link>
        <Link href="/tienda" className="footer-link">
          Tienda
        </Link>
        <Link href="/somos" className="footer-link">
          Somos
        </Link>
        <Link href="/blog" className="footer-link">
          Blog
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
