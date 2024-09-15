'use client';
import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Update the ProjectShowcase component to accept `projects` as props
export function ProjectShowcase({ projects }) {
  return (
    <Carousel className="w-full mx-auto" plugins={[Autoplay({ delay: 3000 })]}>
      <CarouselContent className="-ml-2 flex">
        {projects.map((project, index) => (
          <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
            <div className="p-2">
              <Card className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <CardContent className="absolute inset-0 flex items-end justify-center ">
                  <span className="text-xl font-semibold text-white md:text-2xl bg-black bg-opacity-50 px-2 py-1 rounded-sm">
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
