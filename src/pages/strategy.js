import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSmall from '../components/HeroSmall';
import Image from '../components/Image';
import { Link } from 'gatsby';
import CtaTaskforce from '../components/CtaTaskforce';

function StrategyPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `global river center`,
          `strategy`,
          `danish`,
          `africa`,
          `development`,
          `building better futures`,
          `sustainability`,
          `sdg`,
        ]}
        title='Our Strategy'
      />
      <HeroSmall
        title='Our Strategy'
        heading='We combine a concept built from well-tested components with a strong management team and leading industry partners '
        linkTo='/strategy#strategy-intro'
      ></HeroSmall>

      <section className='[vision] flex flex-wrap items-center md:min-h-1/2 lg:h-screen  snap-start '>
        <Image
          filename='concept-needs.jpeg'
          className='w-full md:w-1/2 md:h-screen object-cover object-center'
        />
        <div className='md:w-1/2 p-12 md:p-24 flex flex-col  '>
          <h2 className='inline-block text-xl  mb-1 text-black text-opacity-50 uppercase'>
            Meeting the needs of the market.
          </h2>
          <p className='inline-block text-xl md:text-2xl lg:text-4xl font-bold mb-4 leading-tight'>
            We supply a much needed concept to a market with a capacity and
            willingness to spend.{' '}
          </p>
          <p className='mb-4'>
            Ensuring we can provide valuable technology and bring skills to a
            market longing for development and innovation, and support
            future-secured income generation and economic development for our
            users and their communities.
          </p>
        </div>
      </section>

      <section className='[vision] flex flex-wrap md:flex-row-reverse items-center md:min-h-1/2 lg:h-screen snap-start  '>
        <Image
          filename='concept-strategic.jpeg'
          className='w-full md:w-1/2 md:h-screen object-cover object-center'
        />
        <div className='md:w-1/2 p-12 md:p-24 flex flex-col  '>
          <h2 className='inline-block text-xl  mb-1 text-black text-opacity-50 uppercase'>
            Strategic Partnerships
          </h2>
          <p className='inline-block text-xl md:text-2xl lg:text-4xl font-bold mb-4 leading-tight'>
            We make strategic partnerships with industry leaders
          </p>
          <p className='mb-4'>
            Ensuring we can provide valuable technology and bring skills to a
            market longing for development and innovation, and support
            future-secured income generation and economic development for our
            users and their communities.
          </p>
          <Link to='/partners' className=' underline font-bold  text-green-700'>
            Learn More About Our Partners
          </Link>
        </div>
      </section>

      <section className='[cta_taskforce] p-12 md:p-24 cta_blue_wiggles  text-white text-center'>
        <div className='max-w-4xl m-auto'>
          <p className='inline-block text-xl md:text-4xl font-bold mb-4'>
            We are always looking to develop new partnerships. If you would like
            to partner with us please get in touch.
          </p>
          <Link
            to='/contact'
            className='inline-block mt-4 border-white border-2 px-4 py-2'
          >
            New Partners
          </Link>
        </div>
      </section>

      <section className='[vision] flex flex-wrap md:flex-row items-center md:min-h-1/2 lg:h-screen  snap-start '>
        <Image
          filename='concept-team.jpeg'
          className='w-full md:w-1/2 md:h-screen md:object-cover object-center'
        />

        <div className='md:w-1/2 p-12 md:p-24 flex flex-col '>
          <h2 className='inline-block text-xl  mb-1 text-black text-opacity-50 uppercase'>
            Team of experts
          </h2>
          <p className='inline-block text-xl md:text-2xl lg:text-4xl font-bold mb-4 leading-tight'>
            We are led by an experienced, professional, multi-disciplinary
            managment team.
          </p>

          <p className='mb-4'>
            This ensures that we plan, operate and develop our concept with
            confidence and accuracy.
          </p>
          <a href='#' className=' underline font-bold block  text-green-700'>
            Learn more about our concept{' '}
          </a>
        </div>
      </section>

      <CtaTaskforce></CtaTaskforce>
    </Layout>
  );
}

export default StrategyPage;
