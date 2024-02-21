import React, { useState, useEffect } from 'react';


import styled from 'styled-components';
import LastOrder from './components/LastOrder';
import Cost from './components/Cost';

const Section = styled.div`
  background-color: #F2FC8D;
  padding: 20px;
  border-radius: 5px;
`;

const Card = styled.div`
  background-color: #DE8814;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  height: 36px;
  color: black;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:active {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    justify-content: center; // Centra el contenido en modo responsivo
  }
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center; // Centra el contenido horizontalmente
  flex-direction: column; // Alinea el contenido verticalmente

  @media (max-width: 768px) {
    width: 100%; // Ocupa todo el ancho en modo responsivo
  }
`;


const RadioButton = styled.input.attrs({ type: 'radio' })`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 10px;

  &:checked {
    background-color: #3CEFE9;
  }
`;


const CheckboxContainer = styled.div`
 display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
  color: black;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: black;
  cursor: pointer;
  transition: opacity 0.3s ease;

`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px
  color: black;
  cursor: pointer;
  transition: opacity 0.3s ease;

`;

const Button = styled.button`
  color: black;
  background-color: #1C43AB; /* Green */
  margin: 10px 5px; // Añade margen en la parte superior e inferior

`;

const ButtonCount = styled.button`
  color: white;
  background-color: #0A817D;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width:10px
  flex: 1;
  margin: 10px 5px; // Añade margen en la parte superior e inferior

  @media (max-width: 768px) {
    background-color: #3CEFE9; // Mantén el color de fondo en modo responsivo
  }
`;

const Title = styled.h2`
font-size: 1.2rem; // Ajusta el tamaño de la fuente
color:black;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; // Añade esta línea para centrar los botones
  gap: 10px;
  color:black;
`;
const Selections = styled.p`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Pastas = () => {
  const [count, setCount] = useState(0);
  const [pasta, setPasta] = useState('');
  const [salsa, setSalsa] = useState('');
  const [extras, setExtras] = useState([]);
  
  const handlePastaChange = (e) => {
    if (e.target.checked) {
      setPasta(e.target.nextSibling.nodeValue.trim());
    } else {
      setPasta('');
    }
    setCount(1);
  };

  const handleSalsaChange = (e) => {
    if (e.target.checked) {
      setSalsa(e.target.nextSibling.nodeValue.trim());
    } else {
      setSalsa('');
    }
    setCount(1);
  };

  const handleExtrasChange = (e) => {
    if (e.target.checked) {
      setExtras(prevExtras => [...prevExtras, e.target.nextSibling.nodeValue.trim()]);
    } else {
      setExtras(prevExtras => prevExtras.filter(extra => extra !== e.target.nextSibling.nodeValue.trim()));
    }
    setCount(1);
  };


  useEffect(() => {
    if (count === 0) {
      setPasta('');
      setSalsa('');
      setExtras([]);
    }
  }, [count]);

  return (
    <Section>
    
      <Title>Pastas</Title>
      {/*Pasta & Salsa Options
       */}
      <Grid>
        <Card>
          <RadioButton name="pasta" onChange={handlePastaChange} /> Spaguetti
        </Card>
        <Card>
          <RadioButton name="pasta" onChange={handlePastaChange} /> Fettuccine
        </Card>
        <Card>
          <RadioButton name="pasta" onChange={handlePastaChange} /> Ravioli
        </Card>
        <Card>
          <RadioButton name="salsa" onChange={handleSalsaChange} /> Pomodoro
        </Card>
        <Card>
          <RadioButton name="salsa" onChange={handleSalsaChange} /> Alfredo
        </Card>
        <Card>
          <RadioButton name="salsa" onChange={handleSalsaChange} /> Pesto
        </Card>
      </Grid>

      {/*Extras Options*/}
      <Section>
        <CheckboxContainer>
          <CheckboxLabel>
            <Checkbox  onChange={handleExtrasChange} /> Champiñones
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox  onChange={handleExtrasChange} /> Portobella
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox  onChange={handleExtrasChange} /> Albondigas
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox onChange={handleExtrasChange}  /> Tocino
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox  onChange={handleExtrasChange}  /> Takoyakis
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox  onChange={handleExtrasChange}  /> Atùn
          </CheckboxLabel>
          <CheckboxLabel>
            <Checkbox   onChange={handleExtrasChange}  /> Salmón
          </CheckboxLabel>
          <CheckboxLabel>
          <Checkbox onChange={handleExtrasChange}  /> Esparragos
          </CheckboxLabel>
        </CheckboxContainer>
      </Section>
{/* */}
      <Selections>
        Pasta: {pasta}, Salsa: {salsa}, Extras: {extras.join(', ')}
      </Selections>
      <Counter>
      <ButtonCount onClick={() => setCount(count > 1 ? count - 1 : 0)}>-</ButtonCount>
        <span>{count}</span>
        <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
      </Counter>
    
      <LastOrder setPasta={setPasta} setSalsa={setSalsa} setExtras={setExtras} setCount={setCount} />

      <FlexContainer>
      <Button>
        Agregar al carrito
      </Button> 
       <Cost/>
      </FlexContainer>
    </Section>
  );
}

export default Pastas;