import React, { useState } from 'react';
import Image from './Image';

function SdgGrid() {
  const data = [
    {
      image: 'sdgs/01.png',
      name: 'No Poverty',
      type: 'Indirect',
      text:
        'GRC contributes directly to SDG 3 though providing the space for health service partners in the center. Here there will initially be a screening service and later a health clinic offering treatments. There will be given health information, sexual and reproductive health and rights information and capacity building for risk reduction and management of national and global health risks.',
    },
    {
      image: 'sdgs/02.png',
      name: 'Zero Hunger',
      type: 'Indirect',
      text:
        'GRC contribute to SDG 2 as GRC has a great focus on agricultural practices and training. There will be extension services for agri-businesses, training in agricultural productivity-enhancing yield, good agricultural practices and in sustainable food production. GRC will also seek international cooperation for know-how, technological development and value-adding processes research.',
    },
    {
      image: 'sdgs/03.png',
      name: 'Good Health and Wellbeing',
      type: 'Indirect',
      text:
        'GRC contributes directly to SDG 3 though providing the space for health service partners in the center. Here there will initially be a screening service and later a health clinic offering treatments. There will be given health information, sexual and reproductive health and rights information and capacity building for risk reduction and management of national and global health risks.',
    },
    {
      image: 'sdgs/04.png',
      name: 'Quality Education',
      type: 'Direct',
      text:
        'GRC contributes directly to SDG 4 by promoting lifelong learning opportunities for all in the GRC Learning Hub. The Learning Hub is a state-of-the-art learning facility providing access to equal learning opportunities for men and women, increasing the number of youth and adults who have relevant skills, for employment, decent jobs and entrepreneurship. There will be a focus on literacy and numeracy training as well as training in sustainable development, sustainable lifestyle and human rights, amongst other trainings.',
    },
    {
      image: 'sdgs/05.png',
      name: 'Gender Equality',
      type: 'Direct',
      text:
        'GRC contributes directly to SDG 5 in empowering women through our Learning Hub, Radio station and Health Services. GRC provides equal access to learning opportunities for men and women, offering income generating skills such as ICT skills and Business skills amongst other. GRC contributes to democratisation through the GRC Radio, where all will have access to provide material, viewpoints and topics to be discussed. The GRC health services will provide information on sexual and reproductive health and rights. Furthermore, GRC will promote women’s rights through offering job opportunities and equal pay within the center. ',
    },
    {
      image: 'sdgs/06.png',
      name: 'Clean water and sanitation',
      type: 'Indirect',
      text:
        'GRC contribute to SDG 6 by the health information that the Health Services provide, creating awareness on sanitation and hygiene, as well as the trainings provided by the Learning Hub. Furthermore, the River Centers infrastructure will focus on water-use efficiency and provides access to clean water.',
    },
    {
      image: 'sdgs/07.png',
      name: 'Affordable and clean energy',
      type: 'Indirect',
      text:
        'GRC contributes to SDG 7 by seeking to only use renewable energy sources – primarily solar energy. GRC will also provide training in the usage of renewable energy sources, the use, production and maintenance of it.',
    },
    {
      image: 'sdgs/08.png',
      name: 'Decent Work and Economic Growth',
      type: 'Direct',
      text:
        'GRC contribute directly to SDG 8 in ensuring sustainable inclusive economic development, and decent work for the communities. GRC promotes decent job creation, entrepreneurship, creativity and innovation. Encouraging the development of micro-, small- and medium sized enterprises. GRC want to provide job opportunities and skills training, reducing the number of unemployed youths. Furthermore, GRC promotes safe and secure working environments.',
    },
    {
      image: 'sdgs/09.png',
      name: 'Industry, Innovation and Infrastructure',
      type: 'Direct',
      text:
        'GRC contributes directly to SDG 9 through the construction of the River Centers. The centers are built with sustainable materials, in a flexible manner enabling it to be reused. Using local materials and workforce (to the extent possible) together with Nordic know-how supports sharing of know-how and local economic development. GRC also contributes by increasing the access to information and communication technology, providing free WIFI within the center and negotiating access for the catchment area.',
    },
    {
      image: 'sdgs/10.png',
      name: 'Reduced inequalities',
      type: 'Indirect Contributions',
      text:
        'GRC contributes to SDG 10 by enhancing local inclusive economic development in non-urban areas. GRC will ensure equal opportunities and empower the social and economic inclusion.',
    },
    {
      image: 'sdgs/11.png',
      name: 'Sustainable cities and communities',
      type: 'Direct',
      text:
        'GRC contributes directly to SDG 11 through our goal of reducing/stopping youth migration to the cities, thereby preventing them in ending up in the slums, as well as our focus on sustainability and ensuring inclusive economic development. Furthermore, the River Centers are safe, inclusive and accessible places for all, and promotes community building. ',
    },
    {
      image: 'sdgs/12.png',
      name: 'Responsible consumption and production',
      type: 'Direct',
      text:
        'GRC contributes directly to SDG 12 through our focus on circular economy. The centers are built from local natural resources as much as possible, with a flexibility that enables reuse. Through the GRC Learning Hub, there will be facilitated skills training on circular economy, promoting the, recycling and reuse, reduction of waste and providing information on sustainable development and lifestyle. ',
    },
    {
      image: 'sdgs/13.png',
      name: 'Climate Action',
      type: 'Indirect',
      text:
        'GRC will indirectly contribute to SDG 13, as GRC intends to be carbon neutral. The Learning Hub will create awareness on climate and sustainable protection and use of ocean and land.',
    },
    {
      image: 'sdgs/14.png',
      name: 'Life Below Water',
      type: 'Indirect',
      text:
        'GRC will indirectly contribute to SDG 14 as GRC intends to be carbon neutral. The Learning Hub will create awareness on climate and sustainable protection and use of ocean and land.',
    },
    {
      image: 'sdgs/15.png',
      name: 'Life On Land',
      type: 'Indirect',
      text:
        'GRC will indirectly contribute to SDG 15 as GRC intends to be carbon neutral. The Learning Hub will create awareness on climate and sustainable protection and use of ocean and land.',
    },
    {
      image: 'sdgs/16.png',
      name: 'Peace, justice and strong institutions',
      type: 'Direct',
      text:
        'GRC contributes directly to SDG 16 in the community building aspects of the centers. There is a great focus on the coming together, hereby promoting peace. GRC has a no corruption policy and a full transparency policy for all tenants of the centers. Furthermore, GRC ensures access to information through the Learning Hub and promotes democratisation through the GRC radio station and the online magazine.',
    },
    {
      image: 'sdgs/17.png',
      name: 'Partnerships for the goals',
      type: 'Direct',
      text:
        'GRC contributes directly to SDG 17 by enhancing global partnerships for sustainable development. GRC is developed through multi-stakeholder partnerships mobilizing, sharing knowledge, expertise, technology and financial resources to support the achievement of GRC and thus the achievement of many of the SDGs. Furthermore, GRC promotes effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships.',
    },
  ];
  const [textHeading, setTextHeading] = useState('Our Impact');
  const [textBody, setTextBody] = useState(
    'Press one of the SDG images to see what our contribution is'
  );
  const [sdgName, setSdgName] = useState('');

  const listItems = data.map((data, index) => (
    <li
      className='w-1/5 md:w-1/6 flex transition duration-200 ease-in-out transform '
      key={data.name}
    >
      <button
        className={
          data.name == textHeading
            ? 'active w-full opacity-100 '
            : 'w-full opacity-75 hover:opacity-100 transition duration-500 ease-in-out'
        }
        onClick={() => updateText(data.text, data.name, index + 1)}
        value={data.name}
        key={data.name}
      >
        <Image className='w-full' filename={data.image} />
      </button>
    </li>
  ));

  function updateText(body, heading, sdg) {
    setTextBody(body);
    setTextHeading(heading);
    setSdgName('SDG Goal ' + sdg);
  }

  return (
    <div>
      <section id='sdgs' className='p-12 md:p-24 bg-white'>
        <div className='text-center max-w-6xl m-auto'>
          <h2 className='block text-lg text-black text-opacity-50 uppercase'>
            Our SDG Impact
          </h2>
          <p className='inline-block text-xl md:text-4xl max-w-4xl font-bold '>
            How our work intersects with the Sustainable Development Goals.
          </p>
        </div>
        <div className=' md:flex flex-row-reverse  md:flex-row w-full md:max-w-full p-4 md:px-0 md:py-12'>
          <ul className='flex flex-wrap flex-row w-full md:w-1/2 h-auto content-start'>
            {listItems}
          </ul>
          <div className='md:px-16 w-full md:w-2/5'>
            <h2 className='font-bold text-grc-blue md:text-2xl'>{sdgName}</h2>

            <h2 className='font-bold md:text-3xl'>{textHeading}</h2>
            <p>{textBody}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SdgGrid;
