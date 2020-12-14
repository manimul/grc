import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NewsFeed from '../components/NewsFeed';
import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import CtaNews from '../components/CtaNewsletter';
import { Icon } from '@iconify/react';
import arrowDownCircle from '@iconify/icons-feather/arrow-down-circle';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "news-bg.jpg" }) {
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
          <div className='md:p-24   m-auto bg-gradient-to-r from-grc-navy  min-h-screen w-full'>
            <div className='max-w-4xl m-auto  py-24'>
              <h1 className='block text-xl  mb-1 text-white text-opacity-50 uppercase'>
                Latest News
              </h1>
              <p className='block text-5xl   leading-tight font-bold mb-4'>
                This is the headlines of the news article and it is this long
              </p>
              <p>Aug 05 2020</p>
              <AnchorLink to={'/news-focus#news-intro'} title='See why'>
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

function NewsFocus() {
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
        title='News Focus'
      />
      <BackgroundSection className=' text-white text-center'></BackgroundSection>
      <section id='news-intro' className='p-24 max-w-4xl m-auto'>
        <p className='pb-12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          className='min-h-half_screen w-full object-cover object-center pb-12'
          src='https://source.unsplash.com/0cgpyigyIkM/1600x1600'
        />

        <p className='pb-12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          className='min-h-half_screen w-full object-cover object-center pb-12'
          src='https://source.unsplash.com/0cgpyigyIkM/1600x1600'
        />

        <p className='pb-12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <NewsFeed></NewsFeed>
      <CtaNews></CtaNews>
    </Layout>
  );
}

export default NewsFocus;
