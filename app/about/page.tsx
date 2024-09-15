"use client";
import React from "react";
import Image from "next/image";


import imageabout from "../../public/images/Heroimages/heroconst1.jpg";
import ReviewCard from "../Components/ReviewCard";

const About = () => {
  return (
    <>
   
      <div className="w-full h-[1px] bg-amber-800"></div>
      <div className="w-full mx-auto flex flex-col lg:flex-row">
        <div className=" lg:flex-col w-full lg:w-[50%]">
          <div className="lg:h-[250px] h-[150px] w-[90%] mx-auto">
            <h1 className="mt-10 mb-3 text-[20px]">What we do</h1>

            <p className="font-bold text-[35px] lg:text-[35px]">
              <span className="animate-slide-right">We</span>{" "}
              <span className="animate-slide-right">craft</span>{" "}
              <span className="animate-slide-right">with</span>{" "}
              <span className="animate-slide-right">a</span>{" "}
              <span className="animate-slide-right">focus</span>{" "}
              <span className="animate-slide-right">on</span> <br className="hidden "/>
              <span className="animate-slide-right animate-people">People</span>
            </p>
          </div>

          <div className="w-full h-[1px] bg-amber-800 mt-6"></div>

          <div className="w-[90%] mx-auto my-8">
            <Image
              alt="aboutImage"
              src={imageabout}
              objectFit="cover"
              className="rounded-lg lg:h-[499px] h-[190px]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true} // Ensure the image is loaded as a priority, especially if it's above the fold
            />
          </div>
          <div className="lg:w-0 w-full h-[1px] bg-amber-800 mt-6"></div>
        </div>
        <div className="hidden lg:block w-[1px] h-[full] bg-amber-800 "></div>

        <div className="lg:w-[50%] w-full mt-10 flex flex-col gap-5 ">
          <p className="font-thin mx-9">
            At SMRT, we don’t just build spaces—we create experiences. From
            dynamic commercial environments that make an impact to cozy, stylish
            residential interiors that feel like home, our team excels at
            turning your ideas into vibrant realities. With deep expertise in
            construction and a keen eye for design, we blend practical
            functionality with elegant aesthetics, ensuring every project not
            only meets but exceeds your expectations. Let us transform your
            vision into a space that truly inspires.
          </p>

          <h1 className="mx-9">Our Expertise</h1>

          <p className="font-thin mx-9">
            With years of experience in the construction and design industry,
            SMRT stands out for its commitment to quality, innovation, and
            client satisfaction. Our portfolio spans a diverse range of
            projects, from large-scale commercial developments to bespoke
            residential designs. Each project is a testament to our att
          </p>

          <h1 className="mx-9">Experience SMRT Services</h1>

          <p className="font-thin mx-9">
            Explore what SMRT has to offer. Our comprehensive services cover
            every aspect of construction and interior design, ensuring that
            every detail is handled with precision and care. Whether you’re
            looking to develop a commercial property that makes a statement or a
            residential space that feels like home, we’re here to make it
            happen.
          </p>

          <h1 className="mx-9">Commitment to Excellence</h1>

          <p className="font-thin mx-9">
            At SMRT, accountability is at the core of everything we do. We pride
            ourselves on delivering projects on time and within budget, without
            ever compromising on quality. Our team is driven by a shared
            commitment to excellence, and we work closely with our clients to
            ensure their vision is realized to the fullest.
          </p>
        </div>
      </div>
      <div className="w-full h-[1px]  bg-amber-800 mt-9 lg:mt-0"></div>
      <style jsx>{`
        .animate-slide-right {
          opacity: 0;
          transform: translateX(50px);
          animation: slideRight 0.7s ease forwards;
        }

        .animate-slide-right:nth-child(1) {
          animation-delay: 0.2s;
        }

        .animate-slide-right:nth-child(2) {
          animation-delay: 0.4s;
        }

        .animate-slide-right:nth-child(3) {
          animation-delay: 0.6s;
        }

        .animate-slide-right:nth-child(4) {
          animation-delay: 0.8s;
        }

        .animate-slide-right:nth-child(5) {
          animation-delay: 1s;
        }

        .animate-slide-right:nth-child(6) {
          animation-delay: 1.2s;
        }

        .animate-slide-right.animate-people {
          animation-delay: 1.8s;
        }

        @keyframes slideRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      
      <div>
      <ReviewCard/>

      </div>
      
    </>
  );
};

export default About;
