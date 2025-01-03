import React from 'react';
import { Flex, Box, IconButton, Link, Text } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
  return (
    <Box as="footer" className="footer-container">
      <Flex justify="center" mb={4} className="footer-social-icons">
        <IconButton
          as="a"
          href="https://www.facebook.com/Atelierpatriciamanfredi"
          target="_blank"
          aria-label="Facebook"
          icon={<FaFacebook />}
          size="lg"
          variant="ghost"
          className="footer-icon-button"
        />
        <IconButton
          as="a"
          href="https://www.instagram.com/atelier.patricia.manfredi/"
          target="_blank"
          aria-label="Instagram"
          icon={<FaInstagram />}
          size="lg"
          variant="ghost"
          className="footer-icon-button"
        />
        <IconButton
          as="a"
          href="https://wa.me/+5493434159927"
          target="_blank"
          aria-label="WhatsApp"
          icon={<FaWhatsapp />}
          size="lg"
          variant="ghost"
          className="footer-icon-button"
        />
        <IconButton
          as="a"
          href="https://youtube.com"
          target="_blank"
          aria-label="YouTube"
          icon={<FaYoutube />}
          size="lg"
          variant="ghost"
          className="footer-icon-button"
        />
        <IconButton
          as="a"
          href="mailto:patricia@vestuariosballetpm.com"
          aria-label="Correo"
          icon={<FaEnvelope />}
          size="lg"
          variant="ghost"
          className="footer-icon-button"
        />
      </Flex>

      <Flex justify="center" gap={8} className="footer-links" mb={4}>
        <Link href="/category/" className="footer-link">
          Cursos Online
        </Link>
        <Link href="/moldeteca" className="footer-link">
          Moldeteca
        </Link>
        <Link href="/quienes-somos" className="footer-link">
          Quienes Somos
        </Link>
        <Link href="/blog" className="footer-link">
          Blog
        </Link>
        <Link href="/contacto" className="footer-link">
          Contacto
        </Link>
      </Flex>

      <Text textAlign="center" fontSize="sm" color="gray.500" mt={4}>
        © 2024 Atelier Patricia Manfredi - Todos los derechos reservados
      </Text>
    </Box>
  );
};

export default Footer;

