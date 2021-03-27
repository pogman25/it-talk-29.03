import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SWAPI from '../SWAPI';

const SecondPage = () => (
  <Layout>
    <SEO title="SWAPI" />
    <h1>Hi from the Test SWAPI page</h1>
    <p>SWAPI is an open Star Wars API</p>
    <SWAPI />
  </Layout>
);

export default SecondPage;
