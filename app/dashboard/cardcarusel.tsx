"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carusel";
import { useState } from "react";
import Link from "next/link";

export function CaruselCasuta() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false })
  );

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        className="lg:max-w-2xl xl:max-w-5xl md:max-w-lg sm:mx-auto mx-12"
      >
        <CarouselContent>
          <CarouselItem>
            <div className="border-2 rounded-lg p-2">
              <h2 className="font-bold relative pb-4 uppercase border-b-2 mt-5">
                Vremea astazi in Bucuresti
              </h2>

              <p className="pb-5 mt-3">
                Descopera care este vremea pentru urmatoarele 7 zile in Capitala
                Romaniei.
                <Link href="/dashboard/capitala">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 border-2 rounded justify-end items-end"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="border-2 rounded-lg p-2">
              <h2 className="font-bold ps-[20px] relative pb-4 uppercase border-b-2 mt-5">
                Vremea astazi in Romania
              </h2>
              <p className=" ml-3 pb-5 mt-3">
                Descopera care este vremea astazi in jurul tarii.
                <Link href="/dashboard">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 border-2 rounded justify-end items-end rotate-90"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="border-2 rounded-lg p-2">
              <h2 className="font-bold ps-[20px] relative pb-4 uppercase border-b-2 mt-5">
                Editeaza profilul
              </h2>
              <p className=" ml-3 pb-5 mt-3">
                Doresti sa modifici datele din contul tau? Le oti edita imediat.
                <Link href="/dashboard/profile">
                  <svg
                    href="/dashboard/capitala"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 border-2 rounded justify-end items-end"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} din {count}
      </div>
    </>
  );
}
