import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Hero from '../components/Hero';
import Repositories from '../components/Repositories';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Hero />
      <main>
        <Repositories />
      </main>
    </Layout>
  );
}
