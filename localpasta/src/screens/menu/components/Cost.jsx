import React from 'react';
import styled from 'styled-components';

const CostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #3CEFE9;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
`;

const CostText = styled.p`
  font-size: 18px;
  margin: 0;
`;

function Cost({ cost }) {
  return (
    <CostContainer>
      <CostText>Costo: ${cost}</CostText>
    </CostContainer>
  );
}

export default Cost;