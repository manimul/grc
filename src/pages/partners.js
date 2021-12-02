import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSmall from '../components/HeroSmall';
import Image from '../components/Image';

function PartnersPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `global river center`,
          `partners`,
          `danish`,
          `africa`,
          `development`,
          `building better futures`,
          `sustainability`,
          `sdg`,
        ]}
        title='Our Partners'
      />
      <HeroSmall
        title='Our Partners'
        heading='Passionate experts. Meet the people behind Global River Center. '
        linkTo='/team#intro'
        singleNav={false}
      ></HeroSmall>
      <section id='partners-intro' className='[team] p-24'>
        <div className='text-center  md:px-24 m-auto mb-4'>
          <h2 className='block text-lg text-black text-opacity-50 uppercase'>
            Our Partners
          </h2>
          <p className='inline-block md:text-4xl text-2xl  font-bold mb-4'>
            Our strength lies in the contribution of our partners.
          </p>
        </div>
        <div className='max-w-6xl md:grid md:grid-cols-3 md:gap-12  m-auto justify-center '>
          <div className='col-span-1 self-center '>
            <Image className='bg-grc-navy' filename='partners/dge.png' />
          </div>

          <div className='mt-6 md:pr-32 col-span-2 '>
            <p className='block text-2xl font-bold mb-1 leading-tight'>DGE</p>
            <p className='mb-4'>
              DGE is an environment and engineering company, offering innovative
              and sustainable solutions to develop societies and create growth.
              DGE is advising on projects, identifying the environmental needs
              in relation to the development within industry, infrastructure and
              construction. They do this with respect for and in harmony with
              the resources the earth provides and the demands of society, thus
              creating the best solutions for their clients and the environment.
              GRC is very happy to have DGE with us, as we admire the immense
              respect for the balance between natures resources and society’s
              demands.
            </p>
            <a
              href='https://www.dge.se/'
              target='_blank'
              rel='noreferrer'
              className=' underline font-bold block m-auto text-green-700'
            >
              Website
            </a>
          </div>

          <div className='mt-6 md:pl-32 col-span-2 '>
            <p className='block text-2xl font-bold mb-1 leading-tight'>Nopef</p>
            <p className='mb-4'>
              The Nordic Project Fund (Nopef) if a fund is issued by the Nordic
              Environment Finance Corporation (NEFCO). The objective of Nopef is
              to facilitate the scale-up of Nordic green solutions on global
              markets. Supported projects shall contribute to direct or indirect
              positive impact on the environment or climate, and have a Nordic
              interest through job creation, export opportunities, technology
              transfer and the promotion of Nordic values. GRC is thrilled that
              Nopef sees the need and impact of our centers, and Nopef has
              therefore granted us support for our feasibility study.
            </p>
            <a
              href='https://nopef.com/'
              target='_blank'
              rel='noreferrer'
              className=' underline font-bold block m-auto text-green-700'
            >
              Website
            </a>
          </div>

          <div className='col-span-1 self-center'>
            <Image className='bg-grc-navy' filename='partners/nopef.png' />
          </div>

          <div className='col-span-1  self-center'>
            <Image className='bg-grc-navy' filename='partners/sweco.png' />
          </div>
          <div className='mt-6 md:pr-32 col-span-2 '>
            <p className='block text-2xl font-bold mb-1 leading-tight'>Sweco</p>
            <p className='mb-4'>
              Sweco is one of Europe’s leading engineering and architecture firm
              in infrastructure, water, buildings and urban development. With
              14,500 employees in 15 countries, Sweco offers highly specialized
              expertise to ensure sustainable solutions for urban development,
              water and sanitation, roads and transportation, public facilities,
              energy, waste management and environmental planning. Sweco is also
              part of the greenkigali.com project of building sustainable cities
              in Rwanda – For this GRC is a ideal plug-in for providing a
              meeting place and the skills training to ensure the sustainability
              of the project. We think this is a brilliant project and we are
              excited to be working with Sweco.
            </p>
            <a
              href='https://www.sweco.se/'
              target='_blank'
              rel='noreferrer'
              className=' underline font-bold block m-auto text-green-700'
            >
              Website
            </a>
          </div>

          <div className='mt-6 md:pl-32 col-span-2 '>
            <p className='block text-2xl font-bold mb-1 leading-tight'>NIRAS</p>
            <p className='mb-4'>
              NIRAS is an international, multidisciplinary engineering
              consultancy company with Nordic roots and values creating
              sustainable development solutions across the globe. NIRAS has over
              2100 employees located in offices in Europe, Asia and Africa. The
              NIRAS Group works in a broad array of areas, including
              construction, infrastructure, public utilities, environment,
              energy generation and transmission, and planning. We are very
              happy to be working with NIRAS and make use of the vast experience
              and expertise, that NIRAS offers, to ensure the best solutions for
              building our centers.
            </p>
            <a
              href='https://www.niras.com/'
              target='_blank'
              rel='noreferrer'
              className=' underline font-bold block m-auto text-green-700'
            >
              Website
            </a>
          </div>

          <div className='col-span-1 self-center'>
            <Image className='bg-grc-navy' filename='partners/niras.png' />
          </div>

          <div className='col-span-1  self-center'>
            <Image className='bg-grc-navy' filename='partners/teamscope.png' />
          </div>
          <div className='mt-6 md:pr-32 col-span-2 '>
            <p className='block text-2xl font-bold mb-1 leading-tight'>
              Teamscope
            </p>
            <p className='mb-4'>
              Teamscope is a data collection app for research. Teamscope makes
              our research easier by allowing our field team to easily collect
              and manage data, especially when we are working in offline and
              remote settings.
            </p>
            <a
              href='https://www.teamscopeapp.com/'
              target='_blank'
              rel='noreferrer'
              className=' underline font-bold block m-auto text-green-700'
            >
              Website
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default PartnersPage;
