import React from 'react';
import Image from './Image';

function AdvisorGrid() {
  return (
    <section
      id='advisors-intro'
      className='[advisory] p-12 md:p-24 bg-gray-200'
    >
      <div className='text-center  m-auto mb-4'>
        <h2 className='block text-lg text-black text-opacity-50 uppercase'>
          Advisory Board
        </h2>
        <p className='inline-block text-xl md:text-2xl lg:text-4xl  font-bold mb-4'>
          A support team of experts.
        </p>
      </div>

      <div className='[advisor_grid] md:max-w-6xl md:grid grid-cols-3 gap-12 mb-12  m-auto text-center'>
        <article className='[advisor_card]'>
          <div className='[card_media]'>
            <Image
              className='h-full w-full object-cover object-center'
              filename='stine.jpg'
            />
          </div>

          <div className='[card_content]'>
            <header>
              <h2 className='text-lg font-bold'>Stine Birke</h2>
            </header>
            <p>
              Institutional investor and Public-Private Partnership (PPP) expert
            </p>
            <footer>
              <a
                href='https://www.linkedin.com/in/stine-birk-3691b01'
                className=' underline font-bold block m-auto text-green-700'
              >
                Linkedin
              </a>
            </footer>
          </div>
        </article>

        <article className='[advisor_card]'>
          <div className='[card_media]'>
            <Image
              className='h-full w-full object-cover object-center'
              filename='jorgen.jpg'
            />
          </div>

          <div className='[card_content]'>
            <header>
              <h2 className='text-lg font-bold'>Jørgen Skov</h2>
            </header>
            <p>International retail professional</p>
            <footer>
              <a
                href='https://www.linkedin.com/in/j%C3%B8rgen-skov-%E6%A3%AE%E8%80%80%E6%81%A9-4594b82/'
                className=' underline font-bold block m-auto text-green-700'
              >
                Linkedin
              </a>
            </footer>
          </div>
        </article>

        <article className='[advisor_card]'>
          <div className='[card_media]'>
            <Image
              className='h-full w-full object-cover object-center'
              filename='niels.jpg'
            />
          </div>

          <div className='[card_content]'>
            <header>
              <h2 className='text-lg font-bold'>Niels Lindsay Vinding</h2>
            </header>
            <p>Sustainable energy economist and strategist</p>
            <footer>
              <a
                href='https://www.linkedin.com/in/niels-vinding-93a7846/?locale=da_DK'
                className=' underline font-bold block m-auto text-green-700'
              >
                Linkedin
              </a>
            </footer>
          </div>
        </article>

        <article className='[advisor_card]'>
          <div className='[card_media]'>
            <Image
              className='h-full w-full object-cover object-center'
              filename='kaliefah.jpg'
            />
          </div>

          <div className='[card_content]'>
            <header>
              <h2 className='text-lg font-bold'>Kaliefah Soko Sackor</h2>
            </header>
            <p>CEO Bambwa Group Liberia</p>
            <footer>
              <a
                href='#'
                className=' underline font-bold block m-auto text-green-700'
              >
                Linkedin
              </a>
            </footer>
          </div>
        </article>

        <article className='[advisor_card]'>
          <div className='[card_media]'>
            <Image
              className='h-full w-full object-cover object-center'
              filename='niels-christian.jpg'
            />
          </div>

          <div className='[card_content]'>
            <header>
              <h2 className='text-lg font-bold'>Niels Christian Nielsen</h2>
            </header>
            <p>Education specialist</p>
            <footer>
              <a
                href='https://www.linkedin.com/in/niels-christian-nielsen-0888b53b/'
                className=' underline font-bold block m-auto text-green-700'
              >
                Linkedin
              </a>
            </footer>
          </div>
        </article>

        <article className='[advisor_card]'>
          <div className='[card_media]'>
            <Image
              className='h-full w-full object-cover object-center'
              filename='kathrine.jpg'
            />
          </div>

          <div className='[card_content]'>
            <header>
              <h2 className='text-lg font-bold'>Kathrine Heiberg</h2>
            </header>
            <p>Mall design professional</p>
            <footer>
              <a
                href='https://www.linkedin.com/in/kathrine-heiberg-163832/'
                className=' underline font-bold block m-auto text-green-700'
              >
                Linkedin
              </a>
            </footer>
          </div>
        </article>

        <article className='[advisor_card]'>
          <div className='[card_media]'>
            <Image
              className='h-full w-full object-cover object-center'
              filename='morten.jpg'
            />
          </div>

          <div className='[card_content]'>
            <header>
              <h2 className='text-lg font-bold'>Morten Schmidt</h2>
            </header>
            <p>Award winning architect</p>
            <footer>
              <a
                href='https://www.linkedin.com/in/morten-schmidt-99899ba/'
                className=' underline font-bold block m-auto text-green-700'
              >
                Linkedin
              </a>
            </footer>
          </div>
        </article>

        <article className='[advisor_card]'>
          <div className='[card_media]'>
            <Image
              className='h-full w-full object-cover object-center'
              filename='dj-black.jpg'
            />
          </div>

          <div className='[card_content]'>
            <header>
              <h2 className='text-lg font-bold'>DJ Black</h2>
            </header>
            <p>Broadcast Journalist</p>
            <footer>
              <a
                href='https://www.linkedin.com/in/dj-black-11947027/'
                className=' underline font-bold block m-auto text-green-700'
              >
                Linkedin
              </a>
            </footer>
          </div>
        </article>

        <article className='[advisor_card]'>
          <div className='[card_media]'>
            <Image
              className='h-full w-full object-cover object-center'
              filename='karol.jpg'
            />
          </div>

          <div className='[card_content]'>
            <header>
              <h2 className='text-lg font-bold'>Karol Marcinkowski</h2>
            </header>
            <p>Civil Engineer and development consultant</p>
            <footer>
              <a
                href='https://www.linkedin.com/in/karol-marcinkowski-2378708/'
                className=' underline font-bold block m-auto text-green-700'
              >
                Linkedin
              </a>
            </footer>
          </div>
        </article>

        <article className='[advisor_card]'>
          <div className='[card_media]'>
            <Image
              className='h-full w-full object-cover object-center'
              filename='kjeld.jpg'
            />
          </div>

          <div className='[card_content]'>
            <header>
              <h2 className='text-lg font-bold'>Kjeld Lercke</h2>
            </header>
            <p>IT and AI specialist</p>
            <footer>
              <a
                href='https://www.linkedin.com/in/kjeldlercke/'
                className=' underline font-bold block m-auto text-green-700'
              >
                Linkedin
              </a>
            </footer>
          </div>
        </article>

        <article className='[advisor_card]'>
          <div className='[card_media]'>
            <Image
              className='h-full w-full object-cover object-center'
              filename='lars_kyburg.png'
            />
          </div>

          <div className='[card_content]'>
            <header>
              <h2 className='text-lg font-bold'>Dr Lars Chr. Kyburg</h2>
            </header>
            <p>Health care systems development and strengthening specialist.</p>
            <footer>
              <a
                href='https://www.linkedin.com/in/kjeldlercke/'
                className=' underline font-bold block m-auto text-green-700'
              >
                Linkedin
              </a>
            </footer>
          </div>
        </article>
      </div>

      <a
        href='#'
        className='text-center underline font-bold block m-auto text-green-700'
      >
        Learn more about the people behind GRC
      </a>
    </section>
  );
}

export default AdvisorGrid;
