import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-color: #16c370;
  padding: 20px;
  border-radius: 5px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 10px; // Reduce el padding
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  height: 36px; // Establece la altura a 36px
  color: black; // Añade esta línea
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;


const RadioButton = styled.input.attrs({ type: 'radio' })`
  margin-right: 5px;
  color: black;
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
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px
  color: black;
`;

const Button = styled.button`
  color: black;
  background-color: #3CEFE9; /* Green */
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

const Selections = styled.p`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;


const Lechugas = () => {
  const [count, setCount] = useState(0);
  const [base, setBase] = useState('');
  const [aderezo, setAderezo] = useState('');
  const [extras, setExtras] = useState([]);

 
  const handleBaseChange = (e) => {
    if (e.target.checked) {
      setBase(e.target.nextSibling.nodeValue.trim());
    } else {
      setBase('');
    }
    setCount(1);
  };

  const handleAderezoChange = (e) => {
    if (e.target.checked) {
      setAderezo(e.target.nextSibling.nodeValue.trim());
    } else {
      setAderezo('');
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
      setBase('');
      setAderezo('');
      setExtras([]);
    }
  }, [count]);

  return (
    <Section>
      <Title>Ensaladas</Title>
      {/*Ensaladas & Aderezos Options
       */}
      <Grid>
        <Card>
          <RadioButton name="base" onChange={handleBaseChange} /> Lechuga
        </Card>
        <Card>
          <RadioButton name="base" onChange={handleBaseChange} /> Espinaca
        </Card>
        <Card>
          <RadioButton name="base" onChange={handleBaseChange} /> Acelga
        </Card>
        <Card>
          <RadioButton name="aderezo" onChange={handleAderezoChange} /> Ranch
        </Card>
        <Card>
          <RadioButton name="aderezo" onChange={handleAderezoChange} /> Cesar
        </Card>
        <Card>
          <RadioButton name="aderezo" onChange={handleAderezoChange} /> Vinagreta
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
        Base: {base}, Aderezo: {aderezo}, Extras: {extras.join(', ')}
      </Selections>
      <Counter>
      <ButtonCount onClick={() => setCount(count > 1 ? count - 1 : 0)}>-</ButtonCount>
        <span>{count}</span>
        <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
      </Counter>

      <Button>
        Agregar al carrito
      </Button>
    </Section>
  );
}

export default Lechugas;