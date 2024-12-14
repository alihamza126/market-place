"use client"
import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "../common/ProductCard"
import Autoplay from "embla-carousel-autoplay"
import { FcFlashOn } from "react-icons/fc";

export function Featured({ locale }) {

    return (
        <div className="px-2 md:px-20">
            <h3 className="text-3xl font-semibold py-5 px-0 md:px-2 text-primary-800/90 flex gap-1 items-center">Featured Listning <FcFlashOn size={30}/></h3>
            <Carousel
                opt={{
                    slidesToScroll: 1, // Scroll by one slide to match `basis-1/4`
                    dragFree: true, // Enable drag-free movement
                    align: "start", // Align slides to the start
                }}
                className="px-0 md:w-full"
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent className=" -ml-1 shadow-none">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-2 md:basis-1/2 select-none  lg:basis-1/4 flex-shrink-0"
                        >
                            <div className="p-1 cursor-pointer">
                                <ProductCard locale={locale} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="md:inline-block hidden"><CarouselPrevious /></div>
                <div className="md:inline-block hidden"><CarouselNext /></div>
            </Carousel>
        </div>

    )
}
