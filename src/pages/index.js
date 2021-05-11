import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import CtaNews from '../components/CtaNewsletter';
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery, Link } from 'gatsby';
import PropTypes from 'prop-types';
import AdvisorGrid from '../components/AdvisoryGrid';
import TeamGrid from '../components/TeamGrid';
import Image from '../components/Image';
import SDG from '../images/sdgs.svg';
import ConceptSection from '../components/ConceptSection';
import PartnerRow from '../components/PartnerRow';
import TheNeed from '../components/TheNeed';
import CtaTaskforce from '../components/CtaTaskforce';
import Button from '../components/Button';
import NewsFeed from '../components/NewsFeed';

//import data from '@iconify/icons-feather/arrow-down-circle';

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "main-hero-bg.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        posts: allWpPost(sort: { fields: [date] }) {
          nodes {
            title
            excerpt
            slug
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              node {
                sourceUrl
                localFile {
                  childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }

        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag='section'
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className='w-full p-6 md:px-24 md:pb-24   m-auto bg-gradient-to-r from-grc-navy  min-h-screen '>
            <div className='max-w-2xl pt-32 md:pt-56 text-center md:text-left'>
              <h1 className=' mb-4 text-3xl md:text-5xl  font-bold leading-tight'>
                We are building better futures for young people in non-urban
                Africa
              </h1>

              <p className='leading-snug md:leading-loose inline-block'>
                Our River Center concept combines in-demand services in a
                sustainable commercial business model. We want to improve the
                quality of life in non-urban African communities by offering a
                viable alternative to city migration.
              </p>

              <Button anchor={true} to='/#vision' text='Learn More'>
                Learn More
              </Button>
            </div>
            <PartnerRow></PartnerRow>
          </div>
        </BackgroundImage>
      );
    }}
  />
);
BackgroundSection.propTypes = {
  className: PropTypes.array,
};

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `global river center`,
          `danish`,
          `africa`,
          `development`,
          `building better futures`,
          `sustainability`,
          `sdg`,
        ]}
        title='Global River Center - Building Better Futures'
      />

      <BackgroundSection className='hero  min-h-screen  text-white  '></BackgroundSection>
      <section
        id='vision'
        className='[vision] md:grid grid-cols-2 gap-4 min-h-screen/2/3'
      >
        <div className='p-6 md:p-24 max-w-2xl text-center md:text-left'>
          <h2 className='inline-block text-xl  mb-1 text-black text-opacity-50 uppercase'>
            Our Vision
          </h2>
          <p className='inline-block text-xl md:text-2xl lg:text-4xl font-bold mb-4 leading-tight'>
            Enhancing the quality of life for citizens in non-urban sub-Saharan
            Africa by building 200 River Centers
          </p>

          <p className='inline-block font-bold mb-4'>
            {' '}
            Particularly for the 200 million marginalized young Africans.{' '}
          </p>
          <p className='mb-4'>
            We aim to create an alternative to city migration by enhancing
            inclusive local economic development, democratisation and skills
            training.
          </p>
          <Link
            to='/our-concept'
            className=' underline font-bold block m-auto text-green-700'
          >
            Learn more about our concept{' '}
          </Link>
        </div>

        <Image
          className='h-full w-full object-cover object-center'
          filename='home_vision.jpeg'
        />
      </section>

      <CtaTaskforce></CtaTaskforce>

      <ConceptSection fullPage={false}></ConceptSection>

      <section
        id='impact'
        className='[impact] px-6 py-12  md:py-24 text-white bg-grc-navy '
      >
        <div className='[impact] max-w-4xl m-auto md:grid grid-cols-5 grid-flow-col  '>
          <div className='  col-span-3  md:max-w-2xl'>
            <h2 className='inline-block text-lg    text-opacity-50 uppercase'>
              Our Impact
            </h2>
            <p className='inline-block text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:pr-16'>
              We directly contribute to 8 of the UNs Sustainable Development
              Goals{' '}
            </p>

            <p className='inline-block font-bold mb-4 md:pr-16'>
              {' '}
              The spin-off effect from our work means we also contribute to 3
              other Goals. Furthermore, the long term impact of our work means
              we can indirectly contribute towards 4 more goals.{' '}
            </p>
            <Link
              to='/story/#sdgs'
              className=' underline font-bold block m-auto text-green-700'
            >
              Learn More About Our SDG Impact
            </Link>
          </div>

          <div className='col-span-2  '>
            <SDG className='w-full align-top h-auto' />
          </div>
        </div>
      </section>

      <TheNeed extended={false}></TheNeed>
      <TeamGrid fullpage={false}></TeamGrid>
      <NewsFeed></NewsFeed>
      <AdvisorGrid></AdvisorGrid>
      <CtaNews></CtaNews>
    </Layout>
  );
}

export default IndexPage;
