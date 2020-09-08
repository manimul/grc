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

      <section className="hero min-h-screen bg-indigo-900 text-white  ">
     
        <div className="px-24 m-auto">

          <div className="max-w-2xl pt-32">
            <h1 className=" mb-4 text-5xl font-bold  leading-tight">
          We are building better futures for young people in non-urban Africa
            </h1>
    
            <p className="leading-loose inline-block">
            Our River Center concept combines in-demand services in a sustainable commercial business model. We want to improve the quality of life in non-urban African communities by offering a viable alternative to city migration.
            </p>
            <a href="#vision" className="inline-block mt-4 border-white border-2 px-4 py-2">Learn More</a>
          </div>
          <div className="mt-24 ">
          <p className="inline-block font-bold">We are proudly sponsored by:</p>
          <div className="grid grid-cols-5 gap-4 mt-8">
            <img src="https://via.placeholder.com/400x200"/>
            <img src="https://via.placeholder.com/400x200"/>
            <img src="https://via.placeholder.com/400x200"/>
            <img src="https://via.placeholder.com/400x200"/>
            <img src="https://via.placeholder.com/400x200"/>
          </div>
        </div>
        </div>
        
      </section>

      <section id="vision" className="[vision] grid grid-cols-2 gap-4 ">
        
          <div className="p-24">
            <h2 className="inline-block text-xl  mb-4 text-black text-opacity-50">
              Our Vision
            </h2>
            <p className="inline-block text-2xl font-bold mb-4">Enhancing the quality of life for citizens in non-urban sub-Saharan Africa by building 200 Global River Centers 
</p>

 <p className="inline-block font-bold mb-4"> Particularly for the 200 million marginalized young Africans. </p>
 <p>We aim to create an alternative to city migration by enhancing inclusive local economic development, democratisation and skills training.
</p>
          </div>
          <img src="https://via.placeholder.com/800"/>
        
      </section>

      <section className="[cta_taskforce] p-24 bg-green-500 text-white text-center">
        <div className="max-w-3xl m-auto">
          <p className="text-4xl">💪</p>
          <h2 className="inline-block text-xl  mb-4 text-white text-opacity-50">
          Join Our Taskforce 
          </h2>
          <p className="inline-block text-2xl font-bold mb-4">Would you like to join the mission to improve the quality of life for thousands of young Africans?</p>
          <a href="#vision" className="inline-block mt-4 border-white border-2 px-4 py-2">Join the taskforce</a>

        </div>
      </section>

      <section className="[concept] py-24  px-4">
      <div >
        <div className="text-center max-w-2xl m-auto mb-4">
          <h2 className="block text-xl  mb-4 text-black text-opacity-50">
            Our Concept
          </h2>
          <p className="inline-block text-2xl  font-bold mb-4">Our Global River Center concept is an innovative and creative combination of needed elements in a cutting-edge sustainable building</p>
          <p >Creating a multi-functional powerhouse consisting of the following elements: </p>
        </div>
        <div className="grid gap-0 grid-cols-3 mb-12">
        <div>
          <img src="https://via.placeholder.com/800x800"/>
        </div>
            <div>
              <img src="https://via.placeholder.com/800x400"/>
              <img src="https://via.placeholder.com/800x400"/>
            </div>
            <div>
              <img src="https://via.placeholder.com/800x400"/>
              <img src="https://via.placeholder.com/800x400"/>
            </div>


        </div>
        <a href="#" className="text-center underline font-bold block m-auto text-green-700" >Learn more about our concept </a>
      </div>
      </section>

      <section id="impact" className="[impact] grid grid-cols-2 gap-4 text-white bg-blue-900 ">
        
          <div className="p-24">
            <h2 className="inline-block text-xl  mb-4  text-opacity-50">
              Our Impact
            </h2>
            <p className="inline-block text-2xl font-bold mb-4">We directly contribute to 8 of the UNs Sustainable Development Goals </p>

 <p className="inline-block font-bold mb-4"> The spin-off effect from our work means we also contribute to 3 other Goals. Furthermore, the long term impact of our work means we can indirectly contribute towards 4 more goals. </p>
 <a href="#" className=" underline font-bold block m-auto text-green-700" >Learn More About Our SDG Impact</a>

          </div>
          <img  className="p-24 rounded-full" src="https://via.placeholder.com/800"/>
        
      </section>

      <section className="[need] p-24">
        <h2 className="inline-block text-2xl font-bold">
          the need
        </h2>
      </section>

     <section className="[team] p-24">
      <h2 className="inline-block text-2xl font-bold">
        Our team
      </h2>
     </section>

     <section className="[advisory] p-24">
      <h2 className="inline-block text-2xl font-bold">
        Advisory board
      </h2>
     </section>

     <section className="[cta_newsletter] p-24">
      <h2 className="inline-block text-2xl font-bold">
        Cta_newsletter
      </h2>
     </section>

     <section className="[news] p-24">
      <h2 className="inline-block text-2xl font-bold">
        News
      </h2>
     </section>

     <section className="[contact] p-24">
      <h2 className="inline-block text-2xl font-bold">
        Contact Us
      </h2>
     </section>
   
    </Layout>
  );
}

export default IndexPage;
