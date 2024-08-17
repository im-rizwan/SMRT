'use client';
import * as React from "react";
import Image from "next/image";  // Import the Image component

import Autoplay from "embla-carousel-autoplay"; // Import the Autoplay plugin

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projectData = [
  { title: "Project 1", imageUrl: "/images/Heroimages/hero1.jpg" },
  { title: "Project 2", imageUrl: "/images/Heroimages/hero2.jpg" },
  { title: "Project 3", imageUrl: "/images/Heroimages/hero3.jpg" },
  { title: "Project 4", imageUrl: "/images/Heroimages/hero4.jpg" },
  { title: "Project 5", imageUrl: "/images/Heroimages/hero1.jpg" },
];

export function ProjectShowcase() {
   

  return (
    <Carousel className="w-full mx-auto" plugins={[Autoplay({ delay: 3000 })]} >
      <CarouselContent className="-ml-2 flex" >
        {projectData.map((project, index) => (
          <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3"  >
            <div className="p-2" >
              <Card className="relative overflow-hidden rounded-lg shadow-lg" >
                <div className="relative w-full h-64 md:h-80 lg:h-96" >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"   // Makes the image cover the parent div
                    objectFit="cover"  // Ensures the image covers the entire area
                    className="rounded-lg"
                  />
                </div>
                <CardContent className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <span className="text-xl font-semibold text-white md:text-2xl">
                    {project.title}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
