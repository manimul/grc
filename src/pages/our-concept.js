import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSmall from "../components/HeroSmall";
import ConceptSection from "../components/ConceptSection";
import { Link } from "gatsby";

function ConceptPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
      <HeroSmall
        title="Our Concept"
        heading="An innovative and creative combination of needed elements in a cutting-edge sustainable building."
        linkTo="/our-concept#concept-intro"
      ></HeroSmall>

      <ConceptSection fullPage={true}></ConceptSection>

      <section className="[cta_taskforce] p-24 cta_blue_wiggles text-white text-center">
        <div className="max-w-4xl m-auto">
          <p className="inline-block text-xl md:text-4xl font-bold mb-4">
            We combine our concept with a strong management team and leading
            industry partners
          </p>
          <Link
            to="/strategy"
            className="inline-block mt-4 border-white border-2 px-4 py-2"
          >
            Learn More About Our Strategy
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default ConceptPage;
