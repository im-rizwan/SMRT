import React from 'react';
import Image from 'next/image';

const OurClients = () => {
  return (
    <>
      <div className='w-[90%] mx-auto bg-gray-400 rounded-sm text-white space-y-2 py-7'>
        <h1 className='text-center text-[28px] md:text-[35px]'>OUR CLIENTS</h1>
        <h3 className='text-center text-[16px] md:text-[20px]'>
          We View Every Client as a <br className='hidden md:block' /> Trusted Long-Term Partner
        </h3>

        <div className='space-y-4 w-[90%] mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            <Image alt='partner logo' src={'/images/partnerlogo.png'} width={150} height={150} />
            <Image alt='partner logo' src={'/images/partnerlogo.png'} width={150} height={150} />
            <Image alt='partner logo' src={'/images/partnerlogo.png'} width={150} height={150} />
            <Image alt='partner logo' src={'/images/partnerlogo.png'} width={150} height={150} />
            <Image alt='partner logo' src={'/images/partnerlogo.png'} width={150} height={150} />
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            <Image alt='partner logo' src={'/images/partnerlogo.png'} width={150} height={150} />
            <Image alt='partner logo' src={'/images/partnerlogo.png'} width={150} height={150} />
            <Image alt='partner logo' src={'/images/partnerlogo.png'} width={150} height={150} />
            <Image alt='partner logo' src={'/images/partnerlogo.png'} width={150} height={150} />
            <Image alt='partner logo' src={'/images/partnerlogo.png'} width={150} height={150} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
