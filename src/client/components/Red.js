import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  flex-grow: 1;
  width: 100vw;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: white;
`;

const Red = () => <Page>Red</Page>;

export default Red;
