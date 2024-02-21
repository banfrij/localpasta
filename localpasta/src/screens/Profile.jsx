import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  background-color: #282c34;

  @media (max-width: 600px) {
    background-color: #342B5F;
  }
`;

const Title = styled.h1`
  color: #fff;
`;

const FormContainer = styled.div`
  margin-top: 20px;
`;

const Section = styled.div`
  margin-bottom: 10px;
  color: #fff;
`;



const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #333;
`;

const ProfileTitle = styled.h1`
  font-size: 24px;
  color: #3CEFE9;
`;

const ProfileInfo = styled.p`
  font-size: 18px;
  color: #333;
`;
const CommercialSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #B0144F;
  color: white;
  position: fixed; // Fija la sección en la pantalla
  right: 0; // Coloca la sección en el lado derecho
  height: 100vh; // Hace que la sección ocupe toda la altura de la pantalla
  width: 200px; // Establece el ancho de la sección
  overflow: auto; // Permite el desplazamiento si el contenido supera la altura
`;
const CommercialTitle = styled.h1`
  font-size: 24px;
  color: white;
`;

const CommercialInfo = styled.p`
  font-size: 18px;
  color: white;
`;

function Profile() {
  return (
    <Container>
      <Title>Bienvenido @nombre_usuario</Title>
      <FormContainer>
        <Section>Ubicación actual (dirección)</Section>
        <Section>Pedido actual</Section>
        <Section>Historial</Section>
      </FormContainer>


      <ProfileContainer>
  <ProfileTitle>Perfil de Comensal</ProfileTitle>
  <ProfileInfo>Información del perfil...</ProfileInfo>
</ProfileContainer>

<CommercialSection>
  <CommercialTitle>Sección Comercial</CommercialTitle>
  <CommercialInfo>Información comercial...</CommercialInfo>
</CommercialSection>


    </Container>
  );
}

export default Profile;