import React from "react";
import Image from "./Image";

function PartnerRow() {
  return (
    <div className="mt-12 md:mt-24 text-center md:text-left ">
      <p className="inline-block font-bold">We are proudly sponsored by:</p>
      <div className="flex flex-row flex-wrap max-w-4xl">
        <Image className="flex-col w-1/4" filename="partners/bambwa.png" />
        <Image className="flex-col w-1/4 " filename="partners/niras.png" />
        <Image className="flex-col  w-1/4" filename="partners/nopef.png" />
        <Image
          className=" flex-col w-1/4"
          filename="partners/growthafrica.png"
        />
        <Image className="flex-col w-1/4" filename="partners/sociability.png" />
        <Image className="flex-col w-1/4" filename="partners/sweco.png" />
        <Image className="flex-col w-1/4 " filename="partners/dge.png" />
      </div>
    </div>
  );
}

export default PartnerRow;
