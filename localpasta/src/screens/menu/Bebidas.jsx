import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #39F4FA;
  padding: 20px;
  border-radius: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: black;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;  
`;

const Button = styled.button`
  background-color: #BCFFF6; /* Green */
  margin-top: 20px; /* Añade un margen superior de 20px */
  color: black;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;
const Title = styled.h2`
  font-size: 1.2rem; // Ajusta el tamaño de la fuente
  color: black;
`;


const Bebidas = () => {
  return (
    <Section>
      <Title>Bebidas</Title>
    <Grid>
      <Card>
        <CheckboxLabel>
          <Checkbox /> Juguito de Orange
        </CheckboxLabel>
      </Card>
      <Card>
        <CheckboxLabel>
          <Checkbox /> Cafe Americano
        </CheckboxLabel>
      </Card>
      <Card>
        <CheckboxLabel>
          <Checkbox /> Vino casero
        </CheckboxLabel>
      </Card>
      <Card>
        <CheckboxLabel>
          <Checkbox /> Pulque
        </CheckboxLabel>
        
      </Card>
      <Card>
        <CheckboxLabel>
          <Checkbox /> Tejate
        </CheckboxLabel>
        
      </Card>
      {/* Agrega más cards según sea necesario */}
    </Grid>
    <Button>
      Agregar al carrito
    </Button>
  </Section>
  );
}
export default Bebidas
