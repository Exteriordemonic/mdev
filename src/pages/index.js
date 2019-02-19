import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import Logo from '../assets/images/logo.png';

const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
`;

const Header = styled.header`
  width: 100%;
  padding: 20px 0;
`;

const Brand = styled.img`
  max-width: 200px;
`;

const TextSection = styled.section`
  padding: 10vh 0;
`;

const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 10px;
`;

const Text = styled.h1`
  font-size: 16px;
`;

const IndexPage = () => (
  <Layout>
    <Page>
      <Header>
        <Link to="/">
          <Brand src={Logo} alt="" />
        </Link>
      </Header>
      <TextSection>
        <Title>We are Developers</Title>
        <Text>We made websites.</Text>
      </TextSection>
    </Page>
  </Layout>
);

export default IndexPage;
