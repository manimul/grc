import React from "react";
import Image from "./Image";

function PartnerRow() {
  return (
    <div className="mt-12 md:mt-24 text-center md:text-left ">
      <p className="inline-block font-bold">Our supporting partners:</p>
      <div className="flex flex-row flex-wrap w-4/5">
        <Image className="flex-col w-1/6" filename="partners/bambwa.png" />
        <Image className="flex-col w-1/6 " filename="partners/niras.png" />
        <Image className="flex-col  w-1/6" filename="partners/nopef.png" />
        <Image
          className=" flex-col w-1/6"
          filename="partners/growthafrica.png"
        />
        <Image className="flex-col w-1/6" filename="partners/sociability.png" />
        <Image className="flex-col w-1/6" filename="partners/sweco.png" />
        <Image className="flex-col w-1/6 " filename="partners/dge.png" />
        <Image className="flex-col w-1/6 " filename="partners/Danicom.png" />
        <Image className="flex-col w-1/6 " filename="partners/unord.png" />
        <Image className="flex-col w-1/6 " filename="partners/UNYA.png" />
        <Image className="flex-col w-1/6 " filename="partners/fooducer.png" />
        <Image className="flex-col w-1/6 " filename="partners/egro.png" />
      </div>
    </div>
  );
}

export default PartnerRow;
