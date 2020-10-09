import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSmall from "../components/HeroSmall";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <HeroSmall
        title="Contact Us"
        heading="We are always looking to meet likeminded and ambitious people. "
        linkTo="/contact#contact-us"
      ></HeroSmall>
    </Layout>
  );
}

export default ContactPage;
