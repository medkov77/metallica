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
  {
    image: "/examples/stellaz.png",
    alt: "Slide 1",
    caption: "Этажерка в стиле Лофт",
  },
  {
    image: "/examples/mangal.png",
    alt: "Slide 2",
    caption: "Печь-мангал, толщина металла 4мм",
  },
  {
    image: "/examples/kronshtein.png",
    alt: "Slide 3",
    caption: "Кронштейн для полки",
  },
  {
    image: "/examples/kronshtein1.png",
    alt: "Slide 4",
    caption: "Кронштейн для полки",
  },
  {
    image: "/examples/trafaret.png",
    alt: "Slide 4",
    caption: "Трафарет для дорожной разметки",
  },
  {
    image: "/examples/tumba.png",
    alt: "Slide 4",
    caption: "Тумба в стиле лофт",
  },
  {
    image: "/examples/connect.png",
    alt: "Slide 4",
    caption: "Коннекторы для бруса",
  },
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
            <p className="text-center mb-2">{slide.alt}</p>
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
