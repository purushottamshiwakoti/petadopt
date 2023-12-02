"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const PetCarousel = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop
        autoFocus={true}
        emulateTouch
        showArrows={false}
        showStatus={false}
        interval={2000}
        stopOnHover
        showThumbs={false}
        showIndicators={false}
        centerMode
        dynamicHeight={true}
      >
        <div>
          <Image src="/images/dog2.jpg" alt="dog-2" width={594} height={396} />
        </div>
        <div>
          <Image src="/images/dog3.jpg" alt="dog-3" width={594} height={396} />
        </div>
        <div>
          <Image src="/images/dog4.jpg" alt="dog-4" width={594} height={396} />
        </div>
      </Carousel>
    </>
  );
};

export default PetCarousel;
