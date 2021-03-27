import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HOC from '../HOC';

const HOCTestPage = () => (
  <Layout>
    <SEO title="Using HOC" />
    <h1>Hi! Here we test High Order Components</h1>
    <HOC />
  </Layout>
);

export default HOCTestPage;
