import React from 'react';
import styled from 'styled-components';


import Pastas from './menu/Pastas';
import Ensaladas from './menu/Ensaladas';
import Bebidas from './menu/Bebidas';



const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  background-color: #130f40;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;


const Menu = () => {
  return (
    <MenuContainer>
    
     <Pastas/>
    <Ensaladas/>
    <Bebidas/>
    
    </MenuContainer>
  );
};

export default Menu;
