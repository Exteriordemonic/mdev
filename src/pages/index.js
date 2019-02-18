import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Image from '../components/Image';

const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const IndexPage = () => (
  <Layout>
    <Page>
      <h1>Portfolio</h1>      
    </Page>
  </Layout>
);

export default IndexPage;
