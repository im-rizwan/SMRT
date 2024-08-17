"use client";
import getFormData from "@/actions/getFormData";


import React from 'react';
import Image from 'next/image';

import imageabout from '../public/images/Heroimages/heroconst4.jpg'
import { CarouselFull } from './Components/CarouselFull';
import { Button } from '@/components/ui/button';
import { ProjectShowcase } from './Components/ProjectShowcase';

const Home: React.FC = () => {

  const sendFormData = async () => {
    const data = "data";
    getFormData(data);
  }

  return (
    <>
      <div>
        <CarouselFull />

        <div className="w-full px-2 flex flex-col md:flex-row my-5">
          {/* Text Section */}
          <div className="md:w-1/2 w-full flex flex-col justify-start p-4">
            <h1 className="text-2xl font-normal text-gray-800 mb-4">
              ABOUT OUR COMPANY
            </h1>
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">
            Transforming visions into reality with expert design and flawless execution.</h3>
            <p className="text-lg text-gray-500 leading-7">
            Welcome to SMRT Interiors & Construction, where creativity meets precision. We specialize in innovative design and construction, delivering exceptional results with a focus on quality and client satisfaction.            </p>

            <Button className='my-9 w-1/3'>Explore our Work</Button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image
                alt="aboutImage"
                src={imageabout}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={true}  // Ensure the image is loaded as a priority, especially if it's above the fold
              />
            </div>
          </div>
        </div>

        <div className='mx-auto w-[90%]'>

          <div className='flex justify-between my-8'>
            <div>

              <h2 className='text-xl font-bold'>Some of our Featured Projects</h2>

            

            </div>
            <div>
              <Button>All projects</Button>
            </div>
          </div>

          <ProjectShowcase />


        </div>

        



      </div>
    </>
  );
};

export default Home;
