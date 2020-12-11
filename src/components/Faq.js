import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

function FAQ() {
  return (
    <section id='faq' className='py-24  px-4'>
      <div className='text-center max-w-4xl m-auto mb-4'>
        <h2 className='block text-xl  mb-1 text-black text-opacity-50 uppercase'>
          FAQ
        </h2>
        <p className='inline-block text-xl md:text-2xl lg:text-4xl  font-bold mb-4'>
          We get asked a lot of questions about Global River Center. Here are
          some of the most common questions to help you understand our story.
        </p>
      </div>
      <div className='max-w-3xl m-auto mb-4'>
        <Accordion allowZeroExpanded className=''>
          <AccordionItem className='border-gray-200'>
            <AccordionItemHeading className=' font-bold text-lg md:text-xl'>
              <AccordionItemButton>Is GRC an NGO?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                No, we are a for-profit impact business, applying social
                enterprise values. By using a for-profit business model we
                ensure sustainability and scalability and incentivize
                stakeholder commitment. Hereby, we have equal emphasis on profit
                and impact.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className='border-gray-200'>
            <AccordionItemHeading className=' font-bold text-lg md:text-xl'>
              <AccordionItemButton>
                Is this a community center, a mall, a college or what?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                No, but we do incorporate elements of all these things. Our
                concept is built upon the synergy of trade, entertainment,
                skills development and community services. Our Trading Hub is an
                environment designed to support local retailers and traders, as
                well as providing access to national and international products.
                Learn more about this here...{' '}
              </p>
              <p>
                Our Entertainment Hub is a space tailored for sports, arts and
                cultural activities. Suitable for social gatherings, festivals,
                cinema, concerts, media creation, and broadcasting.{' '}
              </p>
              <p>
                Our Education Hub provides skills learning facilities and
                programs. We provide access to free global learning platforms.
                Programs include digital and financial literacy, adult literacy,
                sustainable business development, and agricultural practices.
              </p>
              <p>
                Our community hub provides an environment for local community
                gatherings.chief consultations and traditional functions and
                events, public meetings, public services like health and
                extension services, and faith-based services.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className='border-gray-200'>
            <AccordionItemHeading className=' font-bold text-lg md:text-xl'>
              <AccordionItemButton>
                Who are the main beneficiaries of your concept?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Our goal is to improve the quality of life for the youth in
                non-urban Africa. These young people face the risk of becoming a
                lost generation, as lack of opportunity forces them to become
                economic migrants. We aim to create an alternative to city
                migration by enhancing inclusive local economic development,
                democratisation and skills training.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className='border-gray-200'>
            <AccordionItemHeading className=' font-bold text-lg md:text-xl'>
              <AccordionItemButton>
                What&apos;s unique about this concept?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                It is an innovative and unique feature of combining known
                elements (Trade (shopping mall), Entertainment (sports café),
                Learning (vocational training) and Community (community-centers)
                that prove not to be relevant nor viable or sustainable in the
                current forms in their own right. But the combination and
                economic viability assured by the dynamics of a social
                enterprise makes this concept ground-breaking and relevant for
                modern-day non-urban sub-Saharan Africa.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className='border-gray-200'>
            <AccordionItemHeading className=' font-bold text-lg md:text-xl'>
              <AccordionItemButton>
                What will success look like?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                As a true impact-business GRC will not succeed if we do not
                create an impact. The usage of the center is directly connected
                to the impact. By creating a baseline study GRC can measure the
                impact of the center, and especially the learning hub.
                Succeeding will entail that the communities establish ownership
                for the center, in doing so inclusive social and economic
                development will occur. The non-urban areas will flourish and
                thereby stop the youth migration to cities and can even reverse
                the migration.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className='border-gray-200'>
            <AccordionItemHeading className=' font-bold text-lg md:text-xl'>
              <AccordionItemButton>
                I want to help or contribute, how can I?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Contributions can take many shapes and forms. You might be
                surprised by what your experience and competencies have to offer
                us and the sense of meaning Global River Center can offer you.
                Perhaps you can see your company being part of Global River
                Center - as a partner, tenant, sponsor or in other ways.
                Whatever you have in mind, don’t hesitate to reach out to us if
                you want to participate. Oh, and we even have a name for our
                ever-growing team of contributors - it’s called Nordic
                Taskforce. Surely that’s a team of volunteers you want to join!
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className='border-gray-200'>
            <AccordionItemHeading className=' font-bold text-lg md:text-xl'>
              <AccordionItemButton>
                Are you looking for volunteers or interns?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                We are always interested in exploring all collaboration
                prospects, just get in touch.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className='border-gray-200'>
            <AccordionItemHeading className=' font-bold text-lg md:text-xl'>
              <AccordionItemButton>
                Where and when do you expect to launch?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Our first center will be built in Bompata, Ghana where we have
                already secured 26,000m2 of prime land. Construction is expected
                to commence at the end of 2020. Until the center is built we
                intend to use the land for various community activities.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem className='border-gray-200'>
            <AccordionItemHeading className=' font-bold text-lg md:text-xl'>
              <AccordionItemButton>
                Do you contribute towards the SDG2030 goals?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                We directly contribute to 8 of the UNs Sustainable Development
                Goals The spin-oﬀ eﬀect from our work means we also contribute
                to 3 other Goals. Furthermore, the long term impact of our work
                means we can indirectly contribute towards 4 more goals. Learn
                more here
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;
