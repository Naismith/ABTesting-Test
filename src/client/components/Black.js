import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  flex-grow: 1;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: white;
`;

const Black = () => <Page>Black</Page>;

export default Black;
