import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSmall from '../components/HeroSmall';
import AdvisorGrid from '../components/AdvisoryGrid';

function AdvisorPage() {
  return (
    <Layout>
      <SEO
        keywords={[`global river center`, `danish`, `africa`, `development`]}
        title='Global River Center Advisors'
      />
      <HeroSmall
        title='Our Advsiors'
        heading='Passionate experts. Meet the people behind Global River Center. '
        linkTo='/team#intro'
        singleNav={false}
      ></HeroSmall>

      <AdvisorGrid></AdvisorGrid>
    </Layout>
  );
}

export default AdvisorPage;
