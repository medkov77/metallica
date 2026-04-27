"use client";
import useState from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
interface slide {
  image: string;
  alt: string;
  caption: string;
}
const slides: slide[] = [
  { image: "/img/main/laser.jpg", alt: "Slide 1", caption: "First Slide" },
  { image: "/img/main/bend.jpg", alt: "Slide 2", caption: "Second Slide" },
  { image: "/img/main/contrakt.png", alt: "Slide 3", caption: "Third Slide" },
  { image: "/img/main/robot1.png", alt: "Slide 4", caption: "4 Slide" },
];
const Example = () => {
  const settings = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    slidesPerView: 3,
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl text-center mb-4 ">Примеры работ</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <p>{slide.alt}</p>
            <Image
              src={slide.image}
              alt={slide.alt}
              width={500}
              height={700}
              className="mx-auto"
            />
            {slide.caption && (
              <p style={{ textAlign: "center" }}>{slide.caption}</p>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Example;
