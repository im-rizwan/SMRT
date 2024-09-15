import React from "react";
import { ProjectShowcase } from "./ProjectShowcase";

const myProjectData = [
  { imageUrl: "/images/Heroimages/hero1.jpg" },
  { imageUrl: "/images/Heroimages/hero1.jpg" },
  { imageUrl: "/images/Heroimages/hero2.jpg" },
  { imageUrl: "/images/Heroimages/hero3.jpg" },
  { imageUrl: "/images/Heroimages/hero4.jpg" },
  { imageUrl: "/images/Heroimages/hero1.jpg" },
  { imageUrl: "/images/Heroimages/hero1.jpg" },
  { imageUrl: "/images/Heroimages/hero2.jpg" },
  { imageUrl: "/images/Heroimages/hero3.jpg" },
  { imageUrl: "/images/Heroimages/hero4.jpg" },
  { imageUrl: "/images/Heroimages/hero1.jpg" },
];

const ReviewCard = () => {
  return (
    <>
      <div className="w-full max-w-screen-lg h-auto rounded-md bg-gray-200 mx-auto my-5 p-4 md:p-6">
        <h1 className="text-black text-2xl md:text-3xl lg:text-4xl text-center py-4 md:py-6">
          What Our Clients Say
        </h1>

        <div className="w-full mx-auto">
          <ProjectShowcase projects={myProjectData} />
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
