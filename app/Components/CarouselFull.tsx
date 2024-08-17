"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from 'embla-carousel-react'; // Import Embla hook
import Image from "next/image"; // Import Next.js Image component
import { Card, CardContent } from "@/components/ui/card";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing arrow icons from react-icons


export function CarouselFull() {
  // Array of image URLs to be used in the carousel
  const images = [
    '/images/Heroimages/hero1.jpg',
    '/images/Heroimages/heroconst1.jpg',
    '/images/Heroimages/hero2.jpg',
    '/images/Heroimages/heroconst2.jpg',
    '/images/Heroimages/hero3.jpg',
    '/images/Heroimages/heroconst3.jpg',
    '/images/Heroimages/hero4.jpg',
    '/images/Heroimages/heroconst4.jpg',
    '/images/Heroimages/hero5.png',
    '/images/Heroimages/heroconst5.webp',
    '/images/Heroimages/hero6.jpeg',
    '/images/Heroimages/heroconst6.png',
  ];

  // Use the Embla hook with loop option
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  // Function to handle next slide
  const handleNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  // Function to handle previous slide
  const handlePrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="relative h-[400px]">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {images.map((src, index) => (
              <div className="embla__slide" key={index}>
                <Card className="h-[400px] w-full">
                  <CardContent className="flex items-center justify-center h-full p-0">
                    <div className="relative h-full w-full">
                      <Image
                        src={src}
                        alt={`Carousel item ${index + 1}`}
                        layout="fill" // Ensures the image covers the parent div
                        objectFit="cover" // Similar to `object-cover` in img tag
                        className="rounded-sm"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
