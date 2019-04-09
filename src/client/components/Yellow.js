import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  width: 100vw;
  background-color: yellow;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: black;
`;

const Yellow = () => <Page>Yellow</Page>;

export default Yellow;
