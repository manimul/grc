import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSmall from '../components/HeroSmall';
import ConceptSection from '../components/ConceptSection';
import Button from '../components/Button';

function ConceptPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `global river center`,
          `our concept`,
          `danish`,
          `africa`,
          `development`,
          `building better futures`,
          `sustainability`,
          `sdg`,
        ]}
        title='Our Concept'
      />
      <HeroSmall
        title='Our Concept'
        heading='An innovative and creative combination of needed elements in a cutting-edge sustainable building.'
        linkTo='/our-concept#infrastructure'
      ></HeroSmall>

      <ConceptSection fullPage={true}></ConceptSection>

      <section className='[cta_taskforce] p-24 cta_blue_wiggles text-white text-center'>
        <div className='max-w-4xl m-auto'>
          <p className='inline-block text-xl md:text-2xl lg:text-4xl font-bold mb-4'>
            We combine our concept with a strong management team and leading
            industry partners
          </p>

          <Button link={true} to='/strategy'>
            {' '}
            Learn More About Our Strategy
          </Button>
        </div>
      </section>
    </Layout>
  );
}

export default ConceptPage;
