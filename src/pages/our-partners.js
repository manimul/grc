import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroSmall from '../components/HeroSmall';
import { usePartnersListQuery } from '../hooks/usePartnersListQuery';
//import Image from '../components/Image';
import NewsCard from '../components/NewsCard';

const OurPartners = () => {
  const getPartnersList = () => {
    const partnersList = [];
    const partners = usePartnersListQuery();
    partners.allWpPartner.edges.forEach((partnerEdge) => {
      partnersList.push({
        title: partnerEdge.node.title,
        image: partnerEdge.node.featuredImage.node.localFile.childImageSharp,
        type: partnerEdge.node.partnerFields.partnerType,
        website: partnerEdge.node.partnerFields.partnersWebsite,
        logo:
          partnerEdge.node.partnerFields.partnerLogo.localFile.childImageSharp
            .fluid,
        slug: partnerEdge.node.slug,
      });
    });

    console.log(partners);
    console.log(partnersList);
    return partnersList;
  };

  const partnersList = getPartnersList();
  const filteredPartnerList = [];
  const filters = [
    'Finance',
    'Education',
    'Construction & Infrastructure',
    'Business',
  ];
  filters.map((filter) =>
    filteredPartnerList.push(
      partnersList.filter((partner) => partner.type == filter)
    )
  );

  return (
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
        title='Our Partners'
      />
      <HeroSmall
        title='Our Partners'
        heading='Passionate experts. Meet the people behind Global River Center. '
        linkTo='/team#intro'
        singleNav={false}
      ></HeroSmall>

      <section id='partners-intro' className='[team] p-24 text-center'>
        <div className='text-center  px-24 m-auto mb-4'>
          <h2 className='block text-lg text-black text-opacity-50 uppercase'>
            Our Partners
          </h2>
          <p className='inline-block text-4xl  font-bold mb-4'>
            Our strength lies in the contribution of our partners.
          </p>
        </div>

        {filteredPartnerList.map((partnerType) => (
          <div
            className='max-w-6xl  m-auto justify-center text-center'
            key={partnerType.indexOf}
          >
            <h2 className='text-lg font-bold pb-5'>
              {partnerType[0].type + ' Partners'}
            </h2>
            <div className='grid grid-cols-3 gap-12  '>
              <>
                {partnerType.map((partner) => (
                  <>
                    <div key={partner.slug}>
                      <NewsCard
                        title={partner.title}
                        image={partner.logo}
                        slug={'/partners/' + partner.slug}
                      ></NewsCard>
                    </div>
                  </>
                ))}
              </>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default OurPartners;
