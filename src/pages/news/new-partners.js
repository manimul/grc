import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import NewsFeed from '../../components/NewsFeed';
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import CtaNews from '../../components/CtaNewsletter';
import { Icon } from '@iconify/react';
import arrowDownCircle from '@iconify/icons-feather/arrow-down-circle';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Image from '../../components/Image';

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "new-partners.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        fooducer: file(relativePath: { eq: "partners/fooducer.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      //const fooducerImg = data.fooducer.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag='section'
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className='md:p-24   m-auto bg-gradient-to-r from-grc-navy  min-h-screen w-full'>
            <div className='max-w-4xl m-auto  py-24'>
              <p className='block text-xl  mb-1 text-white text-opacity-50 uppercase'>
                GRC News
              </p>
              <h1 className='block text-5xl   leading-tight font-bold mb-4'>
                Our New Partners
              </h1>
              <p>26th August 2020</p>
              <AnchorLink to={'/news/new-partners#news-intro'} title='See why'>
                <Icon
                  className='inline-block mt-4 '
                  icon={arrowDownCircle}
                  style={{ fontSize: '60px' }}
                />
              </AnchorLink>
            </div>
          </div>
        </BackgroundImage>
      );
    }}
  />
);
BackgroundSection.propTypes = {
  className: PropTypes.array,
};

function NewPartners() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='About'
      />
      <BackgroundSection className=' text-white text-center'></BackgroundSection>
      <section
        id='news-intro'
        className='p-12 md:p-24 md:max-w-4xl m-auto space-y-4 '
      >
        <p className='pb-12'>
          The GRC business model hinges on the strength of our partnerships, so
          we put an incredible amount of energy and effort into finding the kind
          of partners we need. Our search criteria is pretty tough. We only want
          relationships with people that share our values. People who are
          dedicated, reliable, passionate and wildly ambitious! Bearing this in
          mind, it’s no mean feat when we find a worthy collaborator. Yet, we do
          manage to find them and now we have a few to share with you. We have
          developed LOIs with following partners: 
        </p>

        <section className='py-6'>
          <Image
            className='block md:w-1/2 bg-grc-navy mb-6'
            filename='partners/fooducer.png'
          ></Image>

          <h2 className='font-bold text-2xl'>Fooducer</h2>
          <a className='underline text-grc-green' href='https://fooducer.com'>
            Fooducer Website
          </a>
          <p className=''>
            Fooducer is the largest B2B food industry platform in Denmark. They
            have a passion for enabling the sharing of data in the food
            industry, bridging the gaps between huge wholesalers and specialised
            manufacturers.
          </p>
          <p className=''>
            With the expert guidance and collaboration of Dr Kyburg, we have an
            even greater confidence that we can develop and offer truly
            impactful and life enhancing experiences to our users. We hope you
            will join us in celebrating this great new addition to the GRC
            family. Keep an eye out for our next newsletter where we will have
            another exciting introduction to make! Interestingly enough in the
            given context, Dr Kyburg reached out to us after reading one of our
            previous newsletters. If, like Dr Kyburg, you think you have
            something to offer GRC, keep on reading...
          </p>
          <p className=''>
            Their product has the ability to empower smaller African
            Agribusinesses, providing the producers with the data they need to
            make the smartest and most sustainable decisions. 
          </p>
          <p className=''>
            This has huge potential in the areas of Africa that GRC will operate
            in, where the need to enhance South to South trade of food goods is
            of critical importance.
          </p>
        </section>
        <section className='py-6'>
          <Image
            className='block md:w-1/2 bg-grc-navy mb-6'
            filename='partners/growthafrica.png'
          ></Image>

          <h2 className='font-bold text-2xl'>Growth Africa</h2>
          <a
            className='underline text-grc-green'
            href='https://growthafrica.com/'
          >
            Growth Africa Website
          </a>
          <p className=''>
            Growth Africa has been dedicated to “growth frontiers” since 2002. A
            PanAfrican company, they help young African businesses to grow by
            providing business acceleration services,  strategic advice and
            access to investments.
          </p>
          <p className=''>
            Their track record is impressive, with numbers including 244
            ventures accelerated, 30,000+ jobs created, 60m in investments and
            most importantly - 850,000 lives positively impacted. With results
            like this you can see why we were interested in developing a
            partnership with them. 
          </p>
          <p className=''>
            We are excited to see how we can work together to support the young
            entrepreneurs that our River Centers will incubate.
          </p>
        </section>

        <section className='py-6'>
          <Image
            className='block md:w-1/2 bg-grc-navy mb-6'
            filename='partners/unord.png'
          ></Image>

          <h2 className='font-bold text-2xl'>U/Nord</h2>
          <a className='underline text-grc-green' href='https://unord.dk/'>
            U/Nord Website
          </a>
          <p className=''>
            U/Nord is a recognised Danish educational institution with more than
            600 employees and a student body of more than 14,000.
          </p>
          <p className=''>
            We aim to work with U/Nord to develop a unique community building
            partnership - enabling cross continental knowledge exchange between
            students. A kind of pen pal 2.0
          </p>
        </section>

        <section className='py-6'>
          <Image
            className='block md:w-1/2 bg-grc-navy mb-6'
            filename='partners/egro.png'
          ></Image>

          <h2 className='font-bold text-2xl'>eGro</h2>
          <a className='underline text-grc-green' href='https://egro.dk/'>
            eGro Website
          </a>
          <p className=''>
            Anyone involved in the CPH impact scene will be familiar with eGro,
            and their passionate founder and CEO Jacob Vahr Svenningsen. Jacob
            and eGro have the impressively ambitious mission of  “making the
            Planet Green and reversing climate change with Sustainable
            Agroforestry.” 
          </p>
          <p className=''>
            The dedication to this mission can be seen in the fact that they
            have so far invested in 112 farming families in 8 villages in
            Northern Ghana to test their sustainable forestry model.
          </p>
          <p className=''>
            It’s our hope that in collaborating with GRC they can scale further
            and help support us in teaching sustainable, environmentally
            positive farming practices.
          </p>
        </section>
        <h3 className='font-bold text-xl py-6'>
          {' '}
          We are working hard to establish more partners and are currently in
          the process of formalising partnerships with:
        </h3>

        <section className='py-6'>
          <Image
            className='block md:w-1/2 bg-grc-navy mb-6'
            filename='partners/UNYA.png'
          ></Image>

          <h2 className='font-bold text-2xl'>UNYA</h2>
          <a className='underline text-grc-green' href='https://unya.dk/'>
            UNYA Website
          </a>
          <p className=''>
            The United Nations Youth Association of Denmark is a youth-led,
            non-profit organisation that works to promote and raise awareness
            amongst youth about the United Nations and the UN affiliated’s
            causes, values and issues. They are passionately dedicated to
            promoting youth participation and volunteerism.
          </p>
          <p className=''>
            The dedication they bring to building engagement with young people
            for noble causes makes them a brilliant partner case for GRC. We
            believe we will really benefit from the energy and participation of
            these young change-makers. 
          </p>
        </section>
      </section>

      <NewsFeed></NewsFeed>
      <CtaNews></CtaNews>
    </Layout>
  );
}

export default NewPartners;
