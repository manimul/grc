import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ConceptPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

<section className="[story_hero] p-24 bg-green-500 text-white text-center ">
        <div className="max-w-4xl m-auto py-24">
          <h2 className="block text-xl  mb-1 text-white text-opacity-50 uppercase">
          Our Story
          </h2>
          <p className="block text-5xl   leading-tight font-bold mb-4">An innovative and creative combination of needed elements in a cutting-edge sustainable building.
</p>
          <a href="#vision" className="inline-block mt-4 border-white border-2 px-4 py-2">Learn More</a>

        </div>
      </section>

    <section  className="[vision] grid grid-cols-2  ">
        
       
        <img className=" " src="https://source.unsplash.com/0cgpyigyIkM/1600x1600"/>
        
        <div className="p-24">
          <h2 className="inline-block text-xl  mb-1 text-black text-opacity-50 uppercase">
            Our Vision
          </h2>
          <p className="inline-block text-4xl font-bold mb-4 leading-tight">Enhancing the quality of life for citizens in non-urban sub-Saharan Africa by building 200 Global River Centers 
</p>

<p className="inline-block font-bold mb-4"> Particularly for the 200 million marginalized young Africans. </p>
<p className="mb-4">We aim to create an alternative to city migration by enhancing inclusive local economic development, democratisation and skills training.
</p>
<a href="#" className=" underline font-bold block m-auto text-green-700" >Learn more about our concept </a>

        </div>
      
    </section>


    <section  className="[vision] grid grid-cols-2 ">
        
        <div className="p-24">
          <h2 className="inline-block text-xl  mb-1 text-black text-opacity-50 uppercase">
            Our Vision
          </h2>
          <p className="inline-block text-4xl font-bold mb-4 leading-tight">Enhancing the quality of life for citizens in non-urban sub-Saharan Africa by building 200 Global River Centers 
</p>

<p className="inline-block font-bold mb-4"> Particularly for the 200 million marginalized young Africans. </p>
<p className="mb-4">We aim to create an alternative to city migration by enhancing inclusive local economic development, democratisation and skills training.
</p>
<a href="#" className=" underline font-bold block m-auto text-green-700" >Learn more about our concept </a>

        </div>
        <img className=" " src="https://source.unsplash.com/0cgpyigyIkM/1600x1600"/>
        
       
      
    </section>


    <section  className="[vision] grid grid-cols-2  ">
        
       
        <img className=" " src="https://source.unsplash.com/0cgpyigyIkM/1600x1600"/>
        
        <div className="p-24">
          <h2 className="inline-block text-xl  mb-1 text-black text-opacity-50 uppercase">
            Our Vision
          </h2>
          <p className="inline-block text-4xl font-bold mb-4 leading-tight">Enhancing the quality of life for citizens in non-urban sub-Saharan Africa by building 200 Global River Centers 
</p>

<p className="inline-block font-bold mb-4"> Particularly for the 200 million marginalized young Africans. </p>
<p className="mb-4">We aim to create an alternative to city migration by enhancing inclusive local economic development, democratisation and skills training.
</p>
<a href="#" className=" underline font-bold block m-auto text-green-700" >Learn more about our concept </a>

        </div>
      
    </section>


    <section  className="[vision] grid grid-cols-2 ">
        
        <div className="p-24">
          <h2 className="inline-block text-xl  mb-1 text-black text-opacity-50 uppercase">
            Our Vision
          </h2>
          <p className="inline-block text-4xl font-bold mb-4 leading-tight">Enhancing the quality of life for citizens in non-urban sub-Saharan Africa by building 200 Global River Centers 
</p>

<p className="inline-block font-bold mb-4"> Particularly for the 200 million marginalized young Africans. </p>
<p className="mb-4">We aim to create an alternative to city migration by enhancing inclusive local economic development, democratisation and skills training.
</p>
<a href="#" className=" underline font-bold block m-auto text-green-700" >Learn more about our concept </a>

        </div>
        <img className=" " src="https://source.unsplash.com/0cgpyigyIkM/1600x1600"/>
        
       
      
    </section>
    <section className="[cta_taskforce] p-24 bg-grc-navy text-white text-center">
        <div className="max-w-4xl m-auto">
          
          <p className="inline-block text-4xl font-bold mb-4">We combine our concept with a strong management team and leading industry partners</p>
          <a href="#vision" className="inline-block mt-4 border-white border-2 px-4 py-2">Learn More About Our Strategy</a>

        </div>
      </section>
    </Layout>
  );
}

export default ConceptPage;
