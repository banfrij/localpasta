import { useState, useEffect } from 'react'

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

import styled from "styled-components"
import Menu from './screens/Menu'
import BottomNavBar from './components/BottomNav';
import Profile from './screens/Profile';


const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background-color: #0F2144;
  background-position: center center;
  background-size: cover;
  text-align: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProductContainer = styled.div`
overflow: fixed;
  flex-grow: 1;

`;

const NoScroll = styled.div`
overflow: hidden;
position:fixed;
width:100%;
height:100%;
`;

const Title = styled.h1`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;
const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  width: 300px;
  outline: none;
  border: none;
  color: black;
`;
const NavBarContainer = styled.div`
  flex-shrink: 0; // Evita que NavBarContainer se encoja
`;


function App() {
  const [currentComponent, setCurrentComponent] = useState('Menu');
  const [modalIsOpen, setModalIsOpen] = useState(true); // Nuevo estado para el modal

  
  useEffect(() => {
    toast("¡Bienvenido! Seleccione sus ingredientes, puede agregar repetidas veces el mismo producto, agregue al carrito y confirme su pedido por favor.", {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    setTimeout(() => {
      setModalIsOpen(false);
    }, 2000); // Cierra el modal después de 2 segundos
  }, []);


  return (
    <>
        <NoScroll>
        <ContainerApp>
          <Title>Loca Pasta</Title>
          <ProductContainer>
        
            {currentComponent === 'Menu' && <Menu />}
            {currentComponent === 'Profile' && <Profile />}
        
          </ProductContainer>
         
        </ContainerApp>
    
       
      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="My dialog"
      >
        <h2>¡Estamos trabajando en nuestro almacenamiento de datos!</h2>
        <p>¡Muy pronto podrás pedir!</p>
      </StyledModal>
    </NoScroll>
    <NavBarContainer>
            <BottomNavBar setCurrentComponent={setCurrentComponent} />
          </NavBarContainer>
    </>
  )
}

export default App
