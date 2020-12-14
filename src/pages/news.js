import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NewsFeed from '../components/NewsFeed';
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import CtaNews from '../components/CtaNewsletter';
import Button from '../components/Button';

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "khadija-jorgen.jpg" }) {
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
      return (
        <BackgroundImage
          Tag='section'
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className='p-12 md:p-24   m-auto bg-gradient-to-r from-grc-navy  min-h-screen w-full'>
            <div className='max-w-4xl m-auto  py-12 md:py-24'>
              <h1 className='block text-xl  mb-1 text-white text-opacity-50 uppercase'>
                Latest News
              </h1>
              <p className='block text-2xl md:text-5xl   leading-tight font-bold mb-4'>
                Khadija meets Jørgen{' '}
              </p>
              <p>4th September 2020</p>

              <Button
                to='/news/khadija-jorgen'
                link={true}
                className='inline-block m-4 border-white border-2 px-4 py-2'
                activeClassName='bg-white text-black'
              >
                Read Now
              </Button>
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

function NewsPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `global river center`,
          `news`,
          `danish`,
          `africa`,
          `development`,
          `building better futures`,
          `sustainability`,
          `sdg`,
        ]}
        title='News Archives'
      />
      <BackgroundSection className=' text-white text-center'></BackgroundSection>
      <NewsFeed></NewsFeed>
      <CtaNews></CtaNews>
    </Layout>
  );
}

export default NewsPage;
