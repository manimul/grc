import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import PropTypes from 'prop-types';

import BackgroundImage from 'gatsby-background-image';

const ConceptSection = (props) => {
  const {
    infrastructure,
    entertainment,
    education,
    trading,
    health,
    community,
  } = useStaticQuery(
    graphql`
      query {
        infrastructure: file(
          relativePath: { eq: "concept/infrastructure.png" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        entertainment: file(
          relativePath: { eq: "concept/entertainment.jpeg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        education: file(relativePath: { eq: "concept/education.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        trading: file(relativePath: { eq: "concept/trade.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        health: file(relativePath: { eq: "concept/health.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        community: file(relativePath: { eq: "concept/community.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const infrastructureImg = infrastructure.childImageSharp.fluid;
  const entertainmentImg = entertainment.childImageSharp.fluid;
  const educationImg = education.childImageSharp.fluid;
  const communityImg = community.childImageSharp.fluid;
  const tradingImg = trading.childImageSharp.fluid;
  const healthImg = health.childImageSharp.fluid;

  return (
    <div>
      {props.fullPage ? (
        <div>
          <section
            id='infrastructure'
            className='[infrastructure] md:grid grid-cols-2   md:min-h-screen/2/3 '
          >
            <BackgroundImage
              Tag={`section`}
              id={`test`}
              className={'h-full w-full object-cover object-center p-4'}
              fluid={infrastructureImg}
            >
              <div className='bg-grc-navy  inline-block p-6   text-white md:w-2/5'>
                <h2 className='font-bold md:text-3xl '>
                  River<br></br> Center<br></br> Infrastructure
                </h2>
              </div>
            </BackgroundImage>

            <div className='p-12 md:p-24 md:max-w-2xl'>
              <h3 className='inline-block text-xl  mb-1 text-black text-opacity-50 uppercase'>
                The Infrastructure
              </h3>
              <p className='inline-block text-xl md:text-4xl font-bold mb-4 leading-tight'>
                Each River Center has a state-of-the-art sustainable
                infrastructural design with a minimum size of 2000m2.
              </p>

              <p className='mb-4'>
                It consists of a flexible and modular steel support structure
                combined with locally made/sourced materials. GRC will provide
                free WIFI in the centers and will to the degree possible connect
                the catchment area.
              </p>
            </div>
          </section>

          <section
            id='trading'
            className='[trading] md:grid grid-cols-2 min-h-screen/2/3'
          >
            <div className='p-12 md:p-24 max-w-2xl'>
              <h3 className='inline-block text-xl  mb-1 text-black text-opacity-50 uppercase'>
                Empowering trade and commerce
              </h3>
              <p className='inline-block text-xl md:text-4xl font-bold mb-4 leading-tight'>
                River Trading Hub is an environment designed to support local
                retailers and traders.
              </p>

              <p className='mb-4'>
                Providing access to national and international products.
              </p>
            </div>
            <BackgroundImage
              Tag={`section`}
              id={`test`}
              className={'h-full w-full object-cover object-center p-4'}
              fluid={tradingImg}
            >
              <div className='bg-grc-blue inline-block p-6   text-white md:w-2/5'>
                <h2 className='font-bold text-lg md:text-3xl md:pr-24'>
                  River<br></br> Trading<br></br> Hub
                </h2>
              </div>
            </BackgroundImage>
          </section>

          <section
            id='entertainment'
            className='[entertainment] md:grid grid-cols-2 min-h-screen/2/3 '
          >
            <BackgroundImage
              Tag={`section`}
              id={`test`}
              className={'h-full w-full object-cover object-center p-4'}
              fluid={entertainmentImg}
            >
              <div className='bg-grc-red  inline-block p-6   text-white md:w-2/5'>
                <h2 className='font-bold text-lg md:text-3xl md:pr-24'>
                  River<br></br> Entertainment<br></br> Hub
                </h2>
              </div>
            </BackgroundImage>

            <div className='p-12 md:p-24 max-w-2xl'>
              <h3 className='inline-block text-xl  mb-1 text-black text-opacity-50 uppercase'>
                Enabling leisure and fun
              </h3>
              <p className='inline-block text-xl md:text-4xl font-bold mb-4 leading-tight'>
                River Entertainment Hub is a space tailored for sports, arts and
                cultural activities.
              </p>

              <p className='mb-4'>
                Suitable for social gatherings, festivals, cinema, concerts,
                media creation, and broadcasting.
              </p>
            </div>
          </section>

          <section
            id='community'
            className='[community] md:grid grid-cols-2 md:min-h-screen/2/3'
          >
            <div className='p-12 md:p-24 max-w-2xl'>
              <h3 className='inline-block text-xl  mb-1 text-black text-opacity-50 uppercase'>
                Supporting the local community
              </h3>
              <p className='inline-block text-xl md:text-4xl font-bold mb-4 leading-tight'>
                River Community Hub provides an enviroment for local community
                gatherings.
              </p>

              <p className='mb-4'>
                For example: chief consultations and traditional functions and
                events, public meetings, public services like health and
                extension services, and faith-based services.
              </p>
            </div>
            <BackgroundImage
              Tag={`section`}
              id={`test`}
              className={'h-full w-full object-cover object-center p-4'}
              fluid={communityImg}
            >
              <div className='bg-grc-green  inline-block p-6   text-white md:w-2/5'>
                <h2 className='font-bold text-lg md:text-3xl md:pr-24'>
                  River<br></br> Community<br></br> Hub
                </h2>
              </div>
            </BackgroundImage>
          </section>

          <section
            id='learning'
            className='[learning] md:grid grid-cols-2 min-h-screen/2/3 '
          >
            <BackgroundImage
              Tag={`section`}
              id={`test`}
              className={'h-full w-full object-cover object-center p-4'}
              fluid={educationImg}
            >
              <div className='bg-grc-yellow  inline-block p-6   text-white md:w-2/5'>
                <h2 className='font-bold text-lg md:text-3xl md:pr-24'>
                  River<br></br> Learning<br></br> Hub
                </h2>
              </div>
            </BackgroundImage>
            <div className='p-12 md:p-24 max-w-2xl'>
              <h3 className='inline-block text-xl  mb-1 text-black text-opacity-50 uppercase'>
                Strenghtening skill sets
              </h3>
              <p className='inline-block text-xl md:text-4xl font-bold mb-4 leading-tight'>
                River Learning Hub is the name given to the skills learning
                facilities and programs that take place in the center.
              </p>

              <p className='mb-4'>
                The access to free global learning platforms. Programs might
                include: digital and financial literacy, adult literacy,
                sustainable business development, and agricultural practices.
              </p>
            </div>
          </section>

          <section
            id='health'
            className='[health] md:grid grid-cols-2 min-h-screen/2/3'
          >
            <div className='p-12 md:p-24 max-w-2xl'>
              <h3 className='inline-block text-xl  mb-1 text-black text-opacity-50 uppercase'>
                River Center Health
              </h3>
              <p className='inline-block text-xl md:text-4xl font-bold mb-4 leading-tight'>
                The promotion of health is a central element in the River
                Centers and is supported within each hub.
              </p>

              <p className='mb-4'>
                The Trading hub will include a pharmacy - The Learning Hub will
                inform and train in preventive measures to stay healthy – The
                Entertainment hub will host sports and health related events –
                The Community Hub will provide medical services but also have
                other health care practitioners that are lacking in the
                different areas and inviting specialists.
              </p>
            </div>
            <BackgroundImage
              Tag={`section`}
              id={`test`}
              className={'h-full w-full object-cover object-center p-4'}
              fluid={healthImg}
            >
              <div className='bg-grc-light-blue inline-block p-6   text-white md:w-2/5'>
                <h2 className='font-bold text-lg md:text-3xl md:pr-24'>
                  River<br></br> Center<br></br> Health
                </h2>
              </div>
            </BackgroundImage>
          </section>
        </div>
      ) : (
        <div>
          <section className='[concept] py-12 md:py-24  px-4 h'>
            <div>
              <div className='text-center max-w-4xl m-auto mb-4'>
                <h2 className='block text-xl  mb-1 text-black text-opacity-50 uppercase'>
                  Our Concept
                </h2>
                <p className='inline-block text-xl md:text-4xl  font-bold mb-4'>
                  Our Global River Center concept is an innovative and creative
                  combination of needed elements in a cutting-edge sustainable
                  building
                </p>
                <p>
                  Creating a multi-functional powerhouse consisting of the
                  following elements:{' '}
                </p>
              </div>

              <div className='md:grid gap-0 grid-cols-3 grid-rows-2  grid-flow-col leading-tight  mb-12 text-white '>
                <BackgroundImage
                  Tag={`section`}
                  id={`test`}
                  className={'md:col-span-1  p-4 pb-32  '}
                  fluid={infrastructureImg}
                >
                  <div className='bg-grc-navy  inline-block p-6 w-3/4 md:w-1/2 '>
                    <h3 className='font-bold text-xl'>
                      River<br></br> Center<br></br> Infrastructures
                    </h3>
                    <p className='text-sm my-4'>
                      An environment designed to support local trade...
                    </p>
                    <Link
                      to='/our-concept#infrastructure'
                      className='underline font-bold block m-auto'
                    >
                      Learn more
                    </Link>
                  </div>
                </BackgroundImage>

                <BackgroundImage
                  Tag={`section`}
                  id={`test`}
                  className={'col-span-1  p-4 pb-32 '}
                  fluid={healthImg}
                >
                  <div className='bg-grc-light-blue inline-block p-6 w-3/4 md:w-1/2'>
                    <h3 className='font-bold text-xl'>
                      River<br></br> Center <br></br> Health
                    </h3>
                    <p className='text-sm my-4'>
                      The promotion of health is a central element in the River
                      Centers...
                    </p>
                    <Link
                      to='/our-concept#health'
                      className='underline font-bold block m-auto'
                    >
                      Learn more
                    </Link>
                  </div>
                </BackgroundImage>

                <BackgroundImage
                  Tag={`section`}
                  id={`test`}
                  className={'col-span-1 p-4 pb-32'}
                  fluid={tradingImg}
                >
                  <div className='bg-grc-blue  inline-block p-6 w-3/4 md:w-1/2'>
                    <h3 className='font-bold text-xl'>
                      River<br></br> Trading <br></br> Hub
                    </h3>
                    <p className='text-sm my-4'>
                      An environment designed to support local trade.
                    </p>
                    <Link
                      to='/our-concept#trading'
                      className='underline font-bold block m-auto'
                    >
                      Learn more
                    </Link>
                  </div>
                </BackgroundImage>

                <BackgroundImage
                  Tag={`section`}
                  id={`test`}
                  className={'col-span-1 p-4 pb-32'}
                  fluid={communityImg}
                >
                  <div className='bg-grc-green inline-block p-6 w-3/4 md:w-1/2'>
                    <h3 className='font-bold text-xl'>
                      River<br></br> Community <br></br>Hub
                    </h3>
                    <p className='text-sm my-4'>
                      An enviroment for local community gatherings.
                    </p>
                    <Link
                      to='/our-concept#community'
                      className='underline font-bold block m-auto'
                    >
                      Learn more
                    </Link>
                  </div>
                </BackgroundImage>

                <BackgroundImage
                  Tag={`section`}
                  id={`test`}
                  className={'col-span-1 p-4 pb-32'}
                  fluid={entertainmentImg}
                >
                  <div className='bg-grc-red  inline-block p-6 w-3/4 md:w-1/2'>
                    <h3 className='font-bold text-xl'>
                      River <br></br>Entertainment<br></br> Hub
                    </h3>
                    <p className='text-sm my-4'>
                      A space tailored for sports, arts and cultural activities.
                    </p>
                    <Link
                      to='/our-concept#entertainment'
                      className='underline font-bold block m-auto'
                    >
                      Learn more
                    </Link>
                  </div>
                </BackgroundImage>

                <BackgroundImage
                  Tag={`section`}
                  id={`test`}
                  className={'col-span-1 p-4 pb-32 '}
                  fluid={educationImg}
                >
                  <div className='bg-grc-yellow  inline-block p-6 w-3/4 md:w-1/2'>
                    <h3 className='font-bold  text-xl'>
                      River<br></br> Learning<br></br> Hub
                    </h3>
                    <p className='text-sm my-4'>
                      The name given to the skills learning facilities that take
                      place in the center.
                    </p>
                    <Link
                      to='/our-concept#learning'
                      className='underline font-bold block m-auto'
                    >
                      Learn more
                    </Link>
                  </div>
                </BackgroundImage>
              </div>
              <Link
                to='/our-concept'
                className='text-center underline font-bold block m-auto text-green-700'
              >
                Learn more about our concept
              </Link>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

ConceptSection.defaultProps = {
  fullPage: true,
};

ConceptSection.propTypes = {
  fullPage: PropTypes.boolean,
};

export default ConceptSection;
