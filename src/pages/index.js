import React from "react";
import styled from "styled-components"

import DealFinder from "../components/DealFinder";

const Title = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 50px;
`

const Index = () => (
  <div>
    <Title>Deal Finder</Title>
    <DealFinder business_name={'Diunsa Honduras'}/>
  </div>
);

export default Index;
