import React from 'react';
import Image from './Image';

function PartnerRow() {
  return (
    <div className='mt-12 md:mt-24 text-center md:text-left '>
      <p className='inline-block font-bold'>Our supporting partners:</p>
      <div className='flex flex-row flex-wrap md:w-4/5'>
        <Image
          className='flex-col w-1/3 md:w-1/5'
          filename='partners/bambwa.png'
        />
        <Image
          className='flex-col w-1/3 md:w-1/5'
          filename='partners/niras.png'
        />
        <Image
          className='flex-col w-1/3 md:w-1/5'
          filename='partners/nopef.png'
        />
        <Image
          className='flex-col w-1/3 md:w-1/5'
          filename='partners/growthafrica.png'
        />
        <Image
          className='flex-col w-1/3 md:w-1/5'
          filename='partners/sociability.png'
        />
        <Image
          className='flex-col w-1/3 md:w-1/5'
          filename='partners/sweco.png'
        />
        <Image
          className='flex-col w-1/3 md:w-1/5'
          filename='partners/dge.png'
        />
        <Image
          className='flex-col w-1/3 md:w-1/5'
          filename='partners/Danicom.png'
        />
        <Image
          className='flex-col w-1/3 md:w-1/5'
          filename='partners/unord.png'
        />
        <Image
          className='flex-col w-1/3 md:w-1/5'
          filename='partners/UNYA.png'
        />
        <Image
          className='flex-col w-1/3 md:w-1/5'
          filename='partners/fooducer.png'
        />
        <Image
          className='flex-col w-1/3 md:w-1/5'
          filename='partners/egro.png'
        />
        <Image
          className='flex-col w-1/3 md:w-1/5'
          filename='partners/teamscope.png'
        />
      </div>
    </div>
  );
}

export default PartnerRow;
