import React from 'react';
import Layout from '../components/layout';
import FAQ from '../components/Faq';
import SEO from '../components/seo';
import CtaNews from '../components/CtaNewsletter';
import { Icon } from '@iconify/react';
import arrowDownCircle from '@iconify/icons-feather/arrow-down-circle';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import TheNeed from '../components/TheNeed';
import Image from '../components/Image';
import Button from '../components/Button';
import SdgGrid from '../components/SdgGrid';

function StoryPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `global river center`,
          `our story`,
          `danish`,
          `africa`,
          `development`,
          `building better futures`,
          `sustainability`,
          `sdg`,
        ]}
        title='Our Story'
      />

      <section className='[story_hero] p-12 md:p-24 cta_blue_shapes text-white text-center  '>
        <div className='max-w-4xl m-auto py-12 md:py-24'>
          <h2 className='block text-xl  mb-1 text-white text-opacity-50 uppercase'>
            Our Story
          </h2>
          <p className='block text-2xl md:text-5xl   leading-tight font-bold mb-4'>
            We are building better futures for young people in non-urban Africa.
            Here’s why.
          </p>
          <AnchorLink to='/story#why' title='See why'>
            <Icon
              className='inline-block mt-4 '
              icon={arrowDownCircle}
              style={{ fontSize: '60px' }}
            />
          </AnchorLink>
        </div>
      </section>

      <section
        id='why'
        className='[vision] md:grid grid-cols-2 min-h-screen/2/3'
      >
        <Image
          filename='story-why.jpeg'
          className='h-auto w-full object-cover object-center'
        ></Image>

        <div className='p-12 md:p-24 max-w-2xl'>
          <h2 className='inline-block text-xl  mb-1 text-black text-opacity-50 uppercase'>
            Why?
          </h2>
          <p className='inline-block text-xl md:text-2xl lg:text-4xl font-bold mb-4 leading-tight'>
            Africa is urbanising at an unsustainable pace
          </p>

          <p className='inline-block font-bold mb-4'>
            It is also home to the world’s youngest and fastest-growing
            population.
          </p>
          <p className='mb-4'>
            Africa’s 1.3 billion citizens will likely double in number by 2050,
            and more than 80% of that increase will occur in cities, especially
            in slums.{' '}
          </p>
          <p className='mb-4'>
            Much of the growth can be attributed to young people from non-urban
            areas migrating to cities in search of opportunities that are yet to
            be found in their hometowns.
          </p>
        </div>
      </section>

      <section className='[cta_] p-12 md:p-24 cta_green_wiggles text-white text-center '>
        <div className='md:max-w-4xl m-auto'>
          <p className='inline-block text-xl md:text-2xl lg:text-4xl font-bold mb-4'>
            We wanted to do something to offset this migration. We developed a
            vision
          </p>
          <AnchorLink
            className='inline-block text-center m-auto'
            to='/story#our-vision'
            title='See our vision'
          >
            <Icon icon={arrowDownCircle} style={{ fontSize: '60px' }} />
          </AnchorLink>
        </div>
      </section>

      <section
        id='our-vision'
        className='[vision] md:grid grid-cols-2 min-h-screen/2/3 '
      >
        <div className='p-12 md:p-24 md:max-w-2xl'>
          <h2 className='inline-block text-xl  mb-1 text-black text-opacity-50 uppercase'>
            Our Vision
          </h2>
          <p className='inline-block text-xl md:text-2xl lg:text-4xl font-bold mb-4 leading-tight'>
            We believe we can improve the the quality of life for citizens in
            non-urban sub-Saharan Africa by building 200 Global River Centers
          </p>

          <p className='inline-block font-bold mb-4'>
            {' '}
            Particularly for the 200 million marginalized young Africans.{' '}
          </p>
          <p className='mb-4'>
            We aim to create an alternative to city migration by enhancing
            inclusive local economic development, democratisation and skills
            training.{' '}
          </p>
          <p className='mb-4'>
            Global River Center creates the frame for enabling inclusive
            societal and personal growth, motivating young people to stay and be
            part of developing their regions and establishing a pride in living
            in nonurban Africa.
          </p>
        </div>
        <Image
          filename='story-vision.jpeg'
          className='max-h-screen w-full object-cover object-center'
        ></Image>
      </section>

      <section className='[cta_strategy] p-24 cta_blue_wiggles  text-white text-center'>
        <div className='max-w-4xl m-auto'>
          <p className='inline-block text-xl md:text-4xl font-bold mb-4'>
            Our concept is an innovative and creative combination of needed
            elements in a cutting-edge sustainable building
          </p>

          <Button link={true} to='/our-concept'>
            {' '}
            Learn More About Our Concept
          </Button>
        </div>
      </section>
      <SdgGrid></SdgGrid>

      <TheNeed></TheNeed>

      <FAQ></FAQ>

      <CtaNews></CtaNews>
    </Layout>
  );
}

export default StoryPage;
