import React from 'react';
import { Layout } from 'antd';
import HeaderComp from '../Header'
import FooterComp from '../../components/Footer'
import ContentComp from '../../components/Content'
import './styles.css';

const App = () => (
  <>
    <Layout>
      <HeaderComp className="header" />
      <ContentComp />
      <FooterComp>Footer</FooterComp>
    </Layout>
    </>
);
export default App;