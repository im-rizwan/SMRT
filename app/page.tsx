"use client";
import getFormData from "@/actions/getFormData";

import React from "react";
import Image from "next/image";

import imageabout from "../public/images/Heroimages/heroconst4.jpg";
import { CarouselFull } from "./Components/CarouselFull";
import { Button } from "@/components/ui/button";
import { ProjectShowcase } from "./Components/ProjectShowcase";

const Home: React.FC = () => {
  const sendFormData = async () => {
    const data = "data";
    getFormData(data);
  };

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
              Transforming visions into reality with expert design and flawless
              execution.
            </h3>
            <p className="text-lg text-gray-500 leading-7">
              Welcome to SMRT Interiors & Construction, where creativity meets
              precision. We specialize in innovative design and construction,
              delivering exceptional results with a focus on quality and client
              satisfaction.{" "}
            </p>

            <Button className="my-9 w-1/3">Explore our Work</Button>
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
                priority={true} // Ensure the image is loaded as a priority, especially if it's above the fold
              />
            </div>
          </div>
        </div>

        <div className="mx-auto w-[90%]">
          <div className="flex justify-between my-8">
            <div>
              <h2 className="text-xl font-bold">
                Some of our Featured Projects
              </h2>
            </div>
            <div>
              <Button>All projects</Button>
            </div>
          </div>

          <ProjectShowcase />
        </div>

        <div className="w-[95%] mx-auto flex flex-col lg:flex-row gap-6 my-4">
          <div className="w-full lg:w-[30%] flex flex-col">
            <div className="p-5 space-y-4">
              <h2 className="text-xl lg:text-2xl font-bold">Our services</h2>
              <p className="font-semibold text-[18px] lg:text-[20px]">
                We Offer a Range of Services to Meet All Types of Needs
              </p>
              <Button className="p-3 lg:p-5">All services</Button>
            </div>
          </div>

          <div className="w-full lg:w-[65%] gap-6 lg:gap-9">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[50%]">
                <div className="p-5 lg:p-8 space-y-2">
                  <Image
                    src="/images/commercialIcon.png"
                    alt="Commercial Designing"
                    width={100}
                    height={100}
                  />
                  <h2 className="font-bold text-lg lg:text-xl">
                    Commercial interior design
                  </h2>
                  <p className="font-light text-[14px] lg:text-[15px]">
                    Transform your workspace with our Commercial Interior Design
                    service. We tailor designs to fit your brand and business
                    needs, creating stylish, efficient environments. Contact us
                    for a consultation and quote.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[50%]">
                <div className="p-5 lg:p-8 space-y-2">
                  <Image
                    src="/images/resdentialicon.webp"
                    alt="Residential Designing"
                    width={100}
                    height={100}
                  />
                  <h2 className="font-bold text-lg lg:text-xl">
                    Residential interior design
                  </h2>
                  <p className="font-light text-[14px] lg:text-[15px]">
                    Our Residential Interior Design service turns your home into
                    a stylish, comfortable space that reflects your personal
                    taste. We customize designs to suit your lifestyle, from
                    concept to completion. Get in touch for a consultation and
                    personalized quote.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row mt-4 lg:mt-0">
              <div className="w-full lg:w-[50%]">
                <div className="p-5 lg:p-8 space-y-2">
                  <Image
                    src="/images/constructionIcon.png"
                    alt="construction design"
                    width={100}
                    height={100}
                  />
                  <h2 className="font-bold text-lg lg:text-xl">Construction</h2>
                  <p className="font-light text-[14px] lg:text-[15px]">
                    Our Construction service delivers high-quality builds
                    tailored to your specifications. Whether it's a new project
                    or a renovation, we manage everything from planning to
                    completion. Benefit from our commitment to craftsmanship and
                    timely delivery. Contact us for a consultation and detailed
                    quote.
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-[50%]">
                <div className="p-5 lg:p-8 space-y-2">
                  <Image
                    src="/images/siteManagement.png"
                    alt="sitemap"
                    width={100}
                    height={100}
                  />
                  <h2 className="font-bold text-lg lg:text-xl">
                    Site management
                  </h2>
                  <p className="font-light text-[14px] lg:text-[15px]">
                    Our Site Management service ensures your construction
                    project runs smoothly and efficiently. We oversee every
                    detail, from scheduling to quality control, ensuring timely
                    and cost-effective completion. Contact us to discuss your
                    project and receive a tailored management plan and quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
