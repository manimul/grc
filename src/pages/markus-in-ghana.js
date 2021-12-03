import React from 'react';
import CtaNews from '../components/CtaNewsletter';
import Image from '../components/Image';
import Layout from '../components/layout';
import SEO from '../components/seo';

function markusInGhana() {
  return (
    <div>
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
          title='My trip to Ghana'
        />

        <section>
          <div className='w-full bg-grc-navy cta_blue_wiggles   h-screen grid grid-cols-10 mb-24 '>
            <div className='[text-section] min-h-screen text-white row-span-full col-start-2 col-span-5 z-10 self-center justify-self-center  '>
              <h1 className='md:text-6xl lg:text-10xl text-6xl leading-none heading_shadow font-black uppercase'>
                My trip to Ghana
              </h1>
              <p className='md:text-2xl text-xl md:w-1/2 '>
                Our intern Markus Buksted Hansen spent a week in Ghana. Here are
                his experiences.{' '}
              </p>
            </div>

            <div className=' -mb-12 min-h-screen row-span-full  col-span-11  col-end-11 md:col-end-11 md:col-span-6   '>
              <Image
                className='min-h-full object-cover '
                filename='markus-trip/day2/2_4.jpg'
              ></Image>
            </div>
          </div>
        </section>

        {/* DAY ONE - 3 Images */}

        <section className='[2-image-default] '>
          <div
            className='md:grid  grid-cols-10   gap-4 
           mb-12'
          >
            <div className=' lg:col-start-3 lg:col-span-4  col-start-2 col-span-5   md:pr-12 md:pt-0 p-12  '>
              <h2 className=' md:text-xl uppercase text-xl font-bold   '>
                Day 1 - Friday
              </h2>
              <h3 className=' md:text-5xl text-2xl font-extrabold leading-none mb-4   '>
                Departure Day
              </h3>
              <div className='space-y-4 text-justify'>
                <p>
                  When I woke up friday morning I was very excited. I had no
                  idea what to expect nor hope for. The days leadinq up to our
                  departure had been filled with us making sure we had the right
                  permits, so I was a bit nervous about getting past security
                  etc. without problems. But everything went well.
                </p>
                <p>
                  {' '}
                  I travelled with the CEO, Elizabeth. We met in CPH Airport at
                  9am, and we departed at 12am. We had an intermediate landing
                  in Amsterdam where Michael, the chairman of the board, joined
                  us. Apart from the intermediate landing we flew in about 8
                  hours before we landed in Accra. The local time in Accra said
                  7pm.
                </p>
                <p>
                  {' '}
                  In Accra we were lead into a room where we waited for the
                  Shuttle Bus to pick us up and take us to our hotel. When we
                  came to the hotel we got a glass of juice, and we checked in.
                  We should only stay there in one night for now, but we would
                  come back later. We were tired after the long flight, so after
                  the check-in we went straight to bed.
                </p>
              </div>
            </div>

            <div className='col-start-7 col-span-3  '>
              {' '}
              <Image
                className='object-cover min-h-half_screen '
                filename='markus-trip/day1/1_1.jpg'
              ></Image>
              <p className='p-2 text-center'>
                Me before boarding the flight at CPH Airport.
              </p>
            </div>

            <div className='col-start-1 col-span-6  '>
              <Image
                className='object-center  h-screen/2'
                filename='markus-trip/day1/1_2.jpg'
              ></Image>
              <p className='p-2 text-center'>
                Just outside the airport in Accra.
              </p>
            </div>

            <div className='col-start-7 col-span-4 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day1/1_3.jpg'
              ></Image>
              <p className='p-2 text-center'>
                All three of us waiting for the shuttle bus to take us to the
                hotel.
              </p>
            </div>
          </div>
        </section>

        {/* DAY TWO - FOUR IMAGES */}

        <section className='[2-image-default] pb-12'>
          <div
            className='md:grid  grid-cols-10   gap-4 
           mb-12'
          >
            <div className='col-start-2 col-span-5  '>
              {' '}
              <Image
                className='object-cover min-h-half_screen'
                filename='markus-trip/day2/2_1.jpg'
              ></Image>
              <p className='p-2 text-center'>Hafiz driving us to Bompata.</p>
            </div>

            <div className=' col-start-7 col-span-3 md:pl-12 md:pr-0 pb-12 p-12 '>
              <h2 className=' md:text-xl uppercase text-xl font-bold   '>
                Day 2 - Saturday
              </h2>
              <h3 className=' md:text-5xl text-2xl font-extrabold leading-none mb-4   '>
                Going to Bompata
              </h3>
              <div className='space-y-4 text-justify'>
                <p>
                  In the morning we ate breakfast at the hotel. I was a bit
                  surprised of the breakfast because it was a lot like the
                  breakfast in danish hotels. It showed me that it must be a
                  hotel where a lot of people from Europe and America come when
                  they visit Ghana.
                </p>
                <p>
                  {' '}
                  After breakfast we packed our things and took off to Bompata.
                  Bompata is a little town 3,5 hours drive from Accra. Hafiz,
                  the head of research in Ghana, drove us there. It was a
                  beautiful drive and the first time I really saw Ghana - both
                  the city and the nature.
                </p>
                <p>
                  {' '}
                  When we came to Bompata they were having a funeral. Funerals
                  is a big thing in Ghana and it is actually more like a party.
                  We attended for a while which was fun. In the afternoon we
                  were shown around Bompata by a local. We saw the church, the
                  school, different shops and met a lot of nice people. In the
                  evening we came to our hotel in Bompata which was very
                  different from the hotel in Accra. But it was okay.
                </p>
              </div>
            </div>

            <div className='col-start-2 col-span-3  '>
              <Image
                className='object-center  h-screen/2'
                filename='markus-trip/day2/2_2.jpg'
              ></Image>
              <p className='p-2 text-center'>
                We attended a funeral in Bompata.
              </p>
            </div>

            <div className='col-start-5 col-span-5 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day2/2_3.jpg'
              ></Image>
              <p className='p-2 text-center'>
                It was a beautiful drive where I really got to see Ghana for the
                first time.
              </p>
            </div>
            <div className='col-start-1 col-span-10 '>
              <Image
                className='object-center h-screen'
                filename='markus-trip/day2/2_4.jpg'
              ></Image>
              <p className='p-2 text-center'>
                We went for an afternoon walk in Bompata
              </p>
            </div>
          </div>
        </section>

        {/* DAY THREE - THREE IMAGES */}

        <section className='[2-image-default] '>
          <div
            className='md:grid  grid-cols-10   gap-4 
           mb-12'
          >
            <div className=' lg:col-start-3 lg:col-span-4  col-start-2 col-span-5   md:pr-12 md:pb-12 md:pt-0 md:pl-0 p-12 '>
              <h2 className=' md:text-xl uppercase text-xl font-bold   '>
                Day 3 - Sunday
              </h2>
              <h3 className=' md:text-5xl text-2xl font-extrabold leading-none mb-4   '>
                Meeting with the Paramount Chief
              </h3>
              <div className='space-y-4 text-justify'>
                <p>
                  At the second day in Bompata we had a meeting with the
                  Paramount Chief of the Bompata Traditional Area after
                  lunchtime. Before the meeting we took on a drive with Hafiz to
                  see the surrounding cities. Again it was a beautiful drive
                  where we saw a lot of the nature and a lot of smaller cities.
                </p>
                <p>
                  {' '}
                  On the drive we came to a market where women sold all kinds of
                  stuff - mostly food. The women were super nice to us and we
                  bought some things. Elizabeth bought chilis and ginger, and
                  just before heading back to Bompata we bought coconuts because
                  of the delicious coconut water.
                </p>
                <p>
                  {' '}
                  When we came back to Bompata we went to the meeting with the
                  Paramount Chief. The Paramount Chief is royal, he owns the
                  land of his area, and his job is to develop his area. When we
                  stepped into his home it was clear to see how rich he is. He
                  was very nice to us and it was a good meeting. It was an
                  incredible privilege to get the opportunity to meet someone of
                  his standing. After the meeting we went back to the hotel in
                  Accra and stayed the night there.
                </p>
              </div>
            </div>

            <div className='col-start-7 col-span-3  '>
              {' '}
              <Image
                className='object-cover min-h-half_screen'
                filename='markus-trip/day3/3_1.jpg'
              ></Image>
              <p className='p-2 text-center'>
                From one of the cities we saw at the drive.
              </p>
            </div>

            <div className='col-start-2 col-span-5  '>
              <Image
                className='object-center  h-screen/2'
                filename='markus-trip/day3/3_4.jpg'
              ></Image>
              <p className='p-2 text-center'>
                A picture with the Paramount Chief in his home.
              </p>
            </div>

            <div className='col-start-7 col-span-3 self-center justify-self-center '>
              <blockquote className='text-5xl leading-none p-12 font-black'>
                &quot;It was an incredible privilege to get the opportunity to
                meet someone of his standing &quot;
              </blockquote>
            </div>
            <div className='col-start-2 col-span-3 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day3/3_3.jpg'
              ></Image>
              <p className='p-2 text-center'>
                We had to taste the delicious coconut water.
              </p>
            </div>

            <div className='col-start-5 col-span-5 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day3/3_2.jpg'
              ></Image>
              <p className='p-2 text-center'>
                We came to a market at the drive.
              </p>
            </div>
          </div>
        </section>

        {/* DAY FOUR - FOUR IMAGES */}

        <section className='[2-image-default] '>
          <div
            className='md:grid  grid-cols-10   gap-4 
           mb-12'
          >
            <div className='lg:col-start-3 col-start-2 col-span-4  '>
              {' '}
              <Image
                className='object-cover'
                filename='markus-trip/day4/4_1.jpg'
              ></Image>
              <p className='p-2 text-center'>
                Christmas decorations at the hotel in Accra.
              </p>
            </div>

            <div className=' lg:col-start-7 lg:col-span-3 col-start-6 col-span-4 md:py-0 md:pr-0   p-12'>
              <h2 className=' md:text-xl uppercase text-xl font-bold   '>
                Day 4 - Monday
              </h2>
              <h3 className=' md:text-5xl text-2xl font-extrabold leading-none mb-4   '>
                Moving Day{' '}
              </h3>
              <div className='space-y-4 text-justify'>
                <p>
                  Now we were back in Accra, but we had to move to another
                  hotel. While waiting in the lobby to check out, we saw they
                  were putting up christmas decorations. I thought that was a
                  bit fun because of the warmth, but of course they could
                  celebrate christmas. While waiting we also found out the prime
                  minister of Denmark would come to Ghana the next day.
                </p>
                <p>
                  {' '}
                  A shuttle bus took us to the new hotel. The new hotel was a
                  lot more quiet and the rooms was more like small huts. But
                  suddenly it started to rain quite heavily. Fortunately it
                  quickly stopped again. We did not do a lot that day because of
                  the moving around, but we had a virtual meeting with the
                  Mastercard Foundation in the afternoon. Before the meeting we
                  had to get creative because the charger for the computer did
                  not charge, so we had to somehow stabilize it with a home
                  build support tower.
                </p>
              </div>
            </div>

            <div className='col-start-1 col-span-5  '>
              <Image
                className='object-center  h-screen/2'
                filename='markus-trip/day4/4_2.jpg'
              ></Image>
              <p className='p-2 text-center'>
                Suddenly it started to rain heavily at the new hotel.
              </p>
            </div>

            <div className='col-start-6 col-span-6 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day4/4_4.jpg'
              ></Image>
              <p className='p-2 text-center'>
                Us standing in front of the Danish embassy in Accra.
              </p>
            </div>
          </div>
        </section>

        {/* DAY FIVE - THREE IMAGES */}

        <section className='[2-image-default] '>
          <div
            className='md:grid  grid-cols-10   gap-4 
           mb-12'
          >
            <div className=' lg:col-start-3 lg:col-span-4  col-start-2 col-span-5   md:pr-12 md:pl-0 md:pt-0 p-12 '>
              <h2 className=' md:text-xl uppercase text-xl font-bold   '>
                Day 5 - Tuesday
              </h2>
              <h3 className=' md:text-5xl text-2xl font-extrabold leading-none mb-4   '>
                Our Last Day Together
              </h3>
              <div className='space-y-4 text-justify'>
                <p>
                  Before lunch we had a meeting with Blue Skies. Blue Skies is a
                  Ghanian/British company that produce goods from fresh fruit
                  and vegetables, and sell it all over the world the next day.
                  It is very delicious what they do because the fruits and
                  vegetables is a lot more tasteful when it is eaten while it is
                  still super fresh. It was an interesting meeting.
                </p>
                <p>
                  {' '}
                  After the meeting with Blue Skies we went back to the hotel
                  and ate lunch. In the afternoon we had a meeting with the
                  supermarket chain SPAR. It was a nice meeting where we learned
                  that only 20% of the trading in Ghana is done in actual
                  stores.
                </p>
                <p>
                  {' '}
                  In the evening we ate dinner together for the last time,
                  because Elizabeth and Michael went to Liberia early the next
                  morning.
                </p>
              </div>
            </div>

            <div className='col-start-7 col-span-3  '>
              {' '}
              <Image
                className='object-cover min-h-half_screen'
                filename='markus-trip/day5/5_1.jpg'
              ></Image>
              <p className='p-2 text-center'>Meeting with SPAR.</p>
            </div>

            <div className='col-start-1 col-span-6  '>
              <Image
                className='object-center  h-screen'
                filename='markus-trip/day5/5_2.jpg'
              ></Image>
              <p className='p-2 text-center'>Blue Skies story.</p>
            </div>

            <div className='col-start-7 col-span-4  '>
              <Image
                className='object-center  h-screen'
                filename='markus-trip/day5/5_4.jpg'
              ></Image>
              <p className='p-2 text-center'>Meeting with Blue Skies.</p>
            </div>
          </div>
        </section>

        {/* DAY FIVE - FOUR IMAGES */}

        <section className='[2-image-default] pb-12'>
          <div
            className='md:grid  grid-cols-10   gap-4 
           mb-12'
          >
            <div className='lg:col-start-3 lg:col-span-4  col-start-2 col-span-4 '>
              {' '}
              <Image
                className='object-cover'
                filename='markus-trip/day6/6_1.jpg'
              ></Image>
              <p className='p-2 text-center'>
                They are building a lot of big new houses.
              </p>
            </div>

            <div className=' lg:col-start-7 lg:col-span-3 col-start-6 col-span-4 md:pr-0 md:pt-0 p-12'>
              <h2 className=' md:text-xl uppercase text-xl font-bold   '>
                Day 6 - Wednesday
              </h2>
              <h3 className=' md:text-5xl text-2xl font-extrabold leading-none mb-4   '>
                Seeing Accra
              </h3>
              <div className='space-y-4 text-justify'>
                <p>
                  When I woke up I decided to go see Accra. I had not had a lot
                  time to do that yet because of all the meetings. I found a
                  safe route down to the water. One of the first things that hit
                  me was all the big houses there was being built all over town.
                  It was mostly big houses for rich people. Another interesting
                  thing was how how close the rich people and the poor people
                  lived to each other. After seeing these big houses I came by a
                  huge slum area.
                </p>
                <p>
                  {' '}
                  After about an hour I reached the water. It was beautiful but
                  the beach was not exactly for a nice day at the beach and some
                  skinny dipping. But it was okay because that was not what I
                  intended. At the beach I found a different safe route back to
                  the hotel. It took me another hour to get back to the hotel.
                </p>
                <p>
                  {' '}
                  When I got back to the hotel I was tired after the long trip
                  around the city in the warm weather. But it was a good trip
                  where I got to see a lot of Accra. The rest of the day I just
                  took it slow.
                </p>
              </div>
            </div>

            <div className='col-start-1 col-span-5  '>
              <Image
                className='object-center  h-screen/2'
                filename='markus-trip/day6/6_2.jpg'
              ></Image>
            </div>

            <div className='col-start-6 col-span-6 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day6/6_3.jpg'
              ></Image>
            </div>
            <div className='col-start-1 col-span-11 '>
              <Image
                className='object-cover  h-screen/2/3'
                filename='markus-trip/day6/6_4.jpg'
              ></Image>
              <p className='p-2 text-center'>
                I really got to see a lot of Accra on my walk
              </p>
            </div>
          </div>
        </section>

        {/* DAY SIX - THREE IMAGES */}

        <section className='[2-image-default] '>
          <div
            className='md:grid  grid-cols-10   gap-4 
           mb-12'
          >
            <div className=' lg:col-start-3 lg:col-span-4  col-start-2 col-span-5   md:pt-0   p-12'>
              <h2 className=' md:text-xl uppercase text-xl font-bold   '>
                Day 7 - Thursday
              </h2>
              <h3 className=' md:text-5xl text-2xl font-extrabold leading-none mb-4   '>
                Going Home
              </h3>
              <div className='space-y-4 text-justify'>
                <p>
                  On my last day in Ghana I had a wish to go see Fort
                  Christiansborg (a.k.a. Osu Castle) and Hafiz ended up taking
                  me sightseeing. It was nice and I got to see all the must-see
                  sights when visiting Accra. Firstly we saw the Blak Star
                  Square with the Independence Arch and the Black Star Gate. It
                  was a huge place which is used for parades at the Indepence
                  Day.
                </p>
                <p>
                  {' '}
                  Then we went to Fort Christiansborg which was a big wish of
                  mine. I am very interested in History and Fort Christiansborg
                  is a big part of both the Danish and the Ghanian history.
                  Hafiz and I went on a guided tour and we got to see the whole
                  fort. It was very exciting but also very tragic to hear the
                  guide tell what the fort has been used for.
                </p>
                <p>
                  {' '}
                  After the guided tour we went on a market where I could buy
                  souvenirs to take home. It was some beautiful stuff they were
                  selling at the market. When I had everything I wanted we drove
                  to the airport. It felt a bit sad to leave...it had been such
                  an eye opening trip, but it was time to go and I was ready to
                  go home to Denmark.
                </p>
              </div>
            </div>

            <div className='col-start-7 col-span-3  '>
              {' '}
              <Image
                className='object-cover min-h-half_screen'
                filename='markus-trip/day7/7_1.jpg'
              ></Image>
              <p className='p-2 text-center'>
                The Independence Arch at the Black Star Square.
              </p>
            </div>

            <div className='col-start-2 col-span-5  '>
              <Image
                className='object-center  h-screen/2'
                filename='markus-trip/day7/7_2.jpg'
              ></Image>
              <p className='p-2 text-center'>
                The famous stairwell at Fort Christiansborg (Osu Castle).
              </p>
            </div>

            <div className='col-start-7 col-span-3 self-center justify-self-center '>
              <blockquote className='text-5xl leading-none p-12 font-black'>
                &quot;It felt a bit sad to leave...it had been such an eye
                opening trip&quot;
              </blockquote>
            </div>
            <div className='col-start-2 col-span-3 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day7/7_3.jpg'
              ></Image>
              <p className='p-2 text-center'>
                The market where I got my souvenirs before going home.
              </p>
            </div>

            <div className='col-start-5 col-span-5 '>
              <Image
                className='object-center h-screen/2'
                filename='markus-trip/day7/7_4.jpg'
              ></Image>
              <p className='p-2 text-center'>The Black Star Gate</p>
            </div>
          </div>
        </section>

        <CtaNews></CtaNews>
      </Layout>
    </div>
  );
}

export default markusInGhana;
