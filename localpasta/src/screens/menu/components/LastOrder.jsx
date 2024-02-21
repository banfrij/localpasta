import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import styled from 'styled-components';

  const StyledButton = styled.button`
  color: white;
  background-color: #2D2830;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1BC0C5;
  }

  @media (max-width: 768px) {
    background-color: #3CEFE9;
  }
`;

  
  function LastOrder({ setPasta, setSalsa, setExtras, setCount }){
    const notify = () => {
      toast("Su ultimo pedido se ha agregado, agregue al carrito :D");
      setPasta('Spaguetti');
      setSalsa('Pomodoro');
      setExtras(['Champiñones']);
      setCount(1);
    };
  
    return (
      <div>
       <StyledButton onClick={notify}>Ultima Orden!</StyledButton>
      <ToastContainer />
      </div>
    );
  }

  export default LastOrder;