import React from "react";
import Button from "./Button";

function CtaTaskforce() {
  return (
    <div>
      <section className="[cta_taskforce] p-12 md:p-24 cta_green_wiggles text-white text-center">
        <div className="w-full md:max-w-4xl m-auto">
          <p className="text-2xl md:text-4xl">💪</p>
          <h2 className="inline-block text-xl  mb-1 text-white text-opacity-50 uppercase">
            Join Our Taskforce
          </h2>
          <p className="inline-block text-2xl md:text-4xl font-bold mb-4">
            Would you like to join the mission to improve the quality of life
            for thousands of young Africans?
          </p>

          <Button link={true} to="/contact">
            Join the taskforce
          </Button>
        </div>
      </section>
    </div>
  );
}

export default CtaTaskforce;
