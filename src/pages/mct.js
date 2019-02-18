import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';

import Layout from '../components/Layout';

const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => (props.show ? 1 : 0)};
  z-index: ${props => (props.show ? 2 : 5)};
  transition: 0.4s;
  transition-delay: 0.1s;

  &:nth-child(1) {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  &:hover {
    .hide-hover {
      opacity: 0;
    }
  }
`;

const Column = styled.div`
  height: 100%;
  width: calc(100% / 5);
  z-index: 10;
  position: relative;
  display: block;

  &:hover {
    & + img {
      opacity: 1 !important;
      transition-delay: 0s;
    }
  }
`;

const Mct = () => (
  <Layout>
    <Page>
      <Wrapper src={withPrefix('./images/3.jpg')}>
        <Image src={withPrefix('./images/bg.jpg')} show="true" />
        <Column />
        <Image src={withPrefix('./images/1.jpg')} />
        <Column />
        <Image src={withPrefix('./images/2.jpg')} />
        <Column />
        <Image src={withPrefix('./images/3.jpg')} />
        <Column />
        <Image src={withPrefix('./images/4.jpg')} />
        <Column />
        <Image src={withPrefix('./images/5.jpg')} />
      </Wrapper>
    </Page>
  </Layout>
);

export default Mct;
