import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSmall from '../components/HeroSmall';
import TeamGrid from '../components/TeamGrid';

function TeamPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `global river center`,
          `team`,
          `danish`,
          `africa`,
          `development`,
          `building better futures`,
          `sustainability`,
          `sdg`,
        ]}
        title='The GRC Team'
      />
      <HeroSmall
        title='Our Team'
        heading='Passionate experts. Meet the people behind Global River Center. '
        linkTo='/team#intro'
        singleNav={false}
      ></HeroSmall>
      <TeamGrid fullPage={true} id='team-intro'></TeamGrid>
    </Layout>
  );
}

export default TeamPage;
