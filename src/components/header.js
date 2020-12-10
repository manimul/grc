import { graphql, useStaticQuery, Link } from 'gatsby';
import React, { useState } from 'react';
import Headroom from 'react-headroom';
import Logo from '../images/grc-logo.svg';
import Dropdown from './Dropdown';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Headroom id='nav' className=' z-50  w-full fixed'>
      <div className='flex flex-wrap items-center justify-between md:px-24 md:py-8 mx-auto p-4   '>
        <Link className='z-10' to='/'>
          <div className='flex items-center z-10'>
            <Logo
              alt={site.siteMetadata.title}
              className='w-32 md:w-32 lg:w-48 align-top h-auto'
            />
          </div>
        </Link>

        <button
          className='items-center block px-3 py-2 text-white border border-white rounded md:hidden z-10'
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className='w-3 h-3 fill-current '
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded
              ? `block bg-grc-navy h-screen px-12 py-24 text-center text-xl fixed top-0 left-o bottom-0 right-0 z-0`
              : `hidden`
          } md:block md:items-center w-full md:w-auto  `}
        >
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/story`,
              title: `Learn about GRC`,
              subroutes: [
                { route: '/story', title: 'Our Story' },
                { route: '/story#our-vision', title: 'Our Vision' },
                { route: '/story#the-need', title: 'The Need' },
                { route: '/story#faq', title: 'FAQ' },
              ],
            },
            {
              route: `/our-concept`,
              title: `What we do`,
              subroutes: [
                { route: '/our-concept', title: 'Our Concept' },
                {
                  route: '/our-concept#infrastructure',
                  title: 'Infrastructure',
                },
                { route: '/our-concept#trading', title: 'Hubs' },
                { route: '/our-concept#health', title: 'Health' },

                { route: '/strategy', title: 'Our Strategy' },
              ],
            },
            {
              route: `/team`,
              title: `The people`,
              subroutes: [
                { route: '/team', title: 'Team' },
                { route: '/advisors', title: 'Advisors' },
                { route: '/partners', title: 'Our Partners' },
              ],
            },
            {
              route: `/news`,
              title: `News`,
            },

            {
              route: `/contact`,
              title: `Contact Us`,
            },
          ].map((link) => (
            <Dropdown
              className='block  text-white md:text-sm lg:text-base font-light pb-2 no-underline md:inline-block md:mt-0 md:mx-2 lg:mx-3 relative'
              activeClassName='font-bold '
              key={link.title}
              pageName={link.title}
              to={link.route}
              master={link}
              subs={link.subroutes}
            >
              {link.title}
            </Dropdown>
          ))}
        </nav>
      </div>
    </Headroom>
  );
}

export default Header;
