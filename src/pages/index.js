import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Hero from '../components/Hero';
import Repositories from '../components/Repositories';
import Career from '../components/Career';
import Education from '../components/Education';
import Stack from '../components/Stack';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <Hero />
      <main>
        <Career />
        <Repositories />
        <Education />
        <Stack />
      </main>
    </Layout>
  );
}
