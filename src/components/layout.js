import PropTypes from 'prop-types';
import React from 'react';
import Header from './header';
import Footer from './Footer';
import CookieConsent from 'react-cookie-consent';

function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen font-raleway text-gray-900  '>
      <Header />

      <main className='flex-1 w-full  mx-auto  pt-24 -mt-24 snap-mandatory snap-start snap-y'>
        {children}
      </main>

      <section
        id='contact-us'
        className='[contact] flex flex-wrap md:flex-no-wrap md:flex-row p-12 md:py-24 md:max-w-6xl m-auto'
      >
        <div className='  md:w-1/2 md:pr-12'>
          <h2 className='inline-block text-xl  mb-1 text-black text-opacity-50 uppercase'>
            Contact Us
          </h2>
          <p className='inline-block text-xl md:text-2xl lg:text-4xl font-bold mb-4 leading-tight'>
            Please get in touch if you have any questions or would like to work
            with us
          </p>

          <p className='mb-4'>
            We are always looking for exciting partnership prospects and we are
            equally enthuastic to discuss our concept with interested parties.
            If this sounds like you get in touch.
          </p>
          <div className='py-6 flex flex-col space-y-1'>
            <p className='font-bold'>Contact us directly at:</p>
            <span>Email:</span>
            <a
              className='underline text-grc-green'
              href='mailto:eb@globalrivercenter.com'
            >
              eb@globalrivercenter.com
            </a>

            <span>Phone: </span>
            <a className='underline text-grc-green' href='tel:004528923485'>
              0045 28 92 34 85
            </a>
          </div>
        </div>
        <div className='py-12 md:py-0 md:w-1/2'>
          <form
            className='w-full max-w-lg'
            name='grc-contact'
            method='POST'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
          >
            <div className='flex flex-wrap  -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='grid-first-name'
                >
                  First Name
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  id='grid-first-name'
                  type='text'
                  placeholder='Jane'
                />
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='grid-last-name'
                >
                  Last Name
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-last-name'
                  type='text'
                  placeholder='Doe'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='grid-password'
                >
                  E-mail
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='email'
                  type='email'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full px-3'>
                <label
                  className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                  htmlFor='grid-password'
                >
                  Message
                </label>
                <textarea
                  className=' no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none'
                  id='message'
                ></textarea>
              </div>
            </div>
            <div className='md:flex md:items-center'>
              <div className='md:w-1/3'>
                <button
                  className='border-grc-navy text-grc-navy hover:text-white hover:bg-grc-navy inline-block mt-4  border-2 px-4 py-2'
                  type='submit'
                >
                  Send
                </button>
              </div>
              <div className='md:w-2/3'></div>
            </div>
          </form>
        </div>
      </section>
      <CookieConsent
        enableDeclineButton
        location='bottom'
        disableStyles={true}
        buttonText='Accept'
        className='bg-black  '
        buttonClasses='bg-green-500 p-2 font-bold text-sm  text-white '
        declineButtonClasses='bg-red-500 mr-4 p-2 text-sm font-bold text-white'
        containerClasses='fixed py-4 px-4 md:px-12 z-10 bg-white w-full flex flex-wrap md:flex-no-wrap md:flex-row md:justify-between items-center bold'
        contentClasses='text-base md:w-4/5'
        declineButtonText='Decline'
        cookieName='gatsby-gdpr-google-analytics'
      >
        We are using cookies to give you the best experience on our site.
        Cookies are files stored in your browser and are used by most websites
        to help personalize your web experience.
      </CookieConsent>
      <Footer></Footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
