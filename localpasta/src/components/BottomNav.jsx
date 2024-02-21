import React, { useState } from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import CartModal from './CartModal'; 

const NavBar = styled.div`
  position: fixed;

  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.15);
`;

const NavButton = styled.button`
  color: white;
  background-color: #6945A2;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  flex: 1;
  margin: 0 5px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    background-color: #3CEFE9;
  }
`;
function BottomNavBar({ setCurrentComponent }) {


  const [isCartModalOpen, setCartModalOpen] = useState(false);

    return (
    <NavBar>
      <NavButton onClick={() => {
        setCurrentComponent('Menu');
      }}>Menu</NavButton>
      <NavButton onClick={() => {
        setCurrentComponent('Profile');
      }}>Profile</NavButton>
      <NavButton onClick={() => setCartModalOpen(true)}><FaShoppingCart size={24} /></NavButton>

      {isCartModalOpen && <CartModal onClose={() => setCartModalOpen(false)} />}
    </NavBar>
  );
}

export default BottomNavBar;