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
          <div className='md:p-24   m-auto bg-gradient-to-r from-grc-navy  min-h-screen w-full'>
            <div className='max-w-4xl m-auto  py-24'>
              <p className='block text-xl  mb-1 text-white text-opacity-50 uppercase'>
                Latest News
              </p>
              <h1 className='block text-5xl   leading-tight font-bold mb-4'>
                Khadija Meets Jørgen
              </h1>
              <p>4th September 2020</p>
              <AnchorLink
                to={'/news/khadija-jorgen#news-intro'}
                title='See why'
              >
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

function KhadijaJorgen() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='About'
      />
      <BackgroundSection className=' text-white text-center'></BackgroundSection>
      <section
        id='news-intro'
        className='p-12 md:p-24 md:max-w-4xl m-auto space-y-4'
      >
        <p className=''>
          Here we can see our brand new recruit, Khadija Wade, a Sengalese
          native residing in Copenhagen, being interviewed by our trusted
          advisor & renowned retail legend Jørgen Skov. We really appreciate the
          hands-on role that Jørgen has played here in GRC and his taking time
          to engage and mentor our team. As a veteran international retail
          professional, with too many achievements to note here ( we will save
          this for a featured profile, stay tuned!) Jørgen has a lot of hard
          earned insights, insights we are lucky to draw upon to discover and
          shape the “wow factor” of our concept. Yet his commitment to his craft
          and his sense of curiosity means he is always asking questions and
          keenly exploring the pulse of the new.
        </p>
        <p className=''>
          Khadija was the perfect sparring partner, offering Jørgen a glimpse
          into emerging Sengalese cultural trends. Insights that she will soon
          be developing when she embarks on the Sengalese research mission for
          GRC. At GRC we thrive on moments like these, bridging the gaps between
          continents, cultures and generations. We put a lot of merit and energy
          into developing a company culture that places knowledge sharing high
          in importance, and really relish the brilliant ideas that flourish
          from this. Keep your eye out for our upcoming newsletters that will
          offer more insights on our amazing team, our processes and the
          exciting activities on our calendar. You can sign up here.
        </p>
      </section>
      <CtaNews></CtaNews>

      <NewsFeed></NewsFeed>
    </Layout>
  );
}

export default KhadijaJorgen;
