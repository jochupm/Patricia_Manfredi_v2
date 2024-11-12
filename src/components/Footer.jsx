import React from 'react';
import { Flex, Box, IconButton, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" className="footer-container">
      <Flex justify="center" mb={4} className="footer-social-icons">
        <IconButton
          as="a"
          href="https://www.facebook.com/Atelierpatriciamanfredi"
          aria-label="Facebook"
          icon={<FaFacebook />}
          size="lg"
          variant="ghost"
          className="footer-icon-button"
        />
        <IconButton
          as="a"
          href="https://www.instagram.com/atelier.patricia.manfredi/"
          aria-label="Instagram"
          icon={<FaInstagram />}
          size="lg"
          variant="ghost"
          className="footer-icon-button"
        />
        <IconButton
          as="a"
          href="https://wa.me/+5493434159927"
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
        <Link href="/cursos" className="footer-link">
          Cursos Online
        </Link>
        <Link href="/moldeteca" className="footer-link">
          Moldeteca
        </Link>
        <Link href="/merceria" className="footer-link">
          Merceria
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
