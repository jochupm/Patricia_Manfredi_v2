import React from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuList, MenuButton, MenuItem, Flex, Box, Spacer, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';



const NavBar = () => {
  return (

      <div>
      <Flex>
        <Box>
          <Link to={"/"}>
            <h3 >Olivia's Store</h3>
          </Link>
        </Box>
        <Spacer/>
        <Box p='10'>
          <Menu>

            <Spacer/>
          <MenuButton as ={Button} rightIcon={<ChevronDownIcon/>}>
            Categories
            </MenuButton>
            <MenuList>
              
              <Link to={`/category/${"men"}`}>
              <MenuItem> Men
              </MenuItem>
              </Link>
          
              <Link to={`/category/${"women"}`}>
              <MenuItem>Women
              </MenuItem>
              </Link>
              <Link to={`/category/${"unisex"}`}>
              <MenuItem>
              Unisex 
              </MenuItem>
              </Link>
              <Link to={`/category/`}>
              <MenuItem>
              All 
              </MenuItem>
              </Link>
              </MenuList>
          </Menu>
        </Box>
        <Spacer/>
        <div className="flex align-middle">
        <CartWidget />

      </div>

      </Flex>
       </div> 

  );
};

export default NavBar;

