import React from "react";
import { Link } from "gatsby";

function CtaTaskforce() {
  return (
    <div>
      <section className="[cta_taskforce] p-24 cta_green_wiggles text-white text-center">
        <div className="max-w-4xl m-auto">
          <p className="text-4xl">💪</p>
          <h2 className="inline-block text-xl  mb-1 text-white text-opacity-50 uppercase">
            Join Our Taskforce
          </h2>
          <p className="inline-block text-4xl font-bold mb-4">
            Would you like to join the mission to improve the quality of life
            for thousands of young Africans?
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 border-white border-2 px-4 py-2"
          >
            Join the taskforce
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CtaTaskforce;
