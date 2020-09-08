import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
     

        <h1 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
        We are building better futures for young people in non-urban Africa
        </h1>

        <p className="leading-loose">
        Our River Center concept combines in-demand services in a sustainable commercial business model. 
We want to improve the quality of life in non-urban African communities by offering a viable alternative to city migration.

        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
