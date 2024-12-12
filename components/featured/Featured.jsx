import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "../common/ProductCard"

export function Featured({ locale }) {

    return (
        <div className="px-2 md:px-20">
            <h3 className="text-3xl font-semibold py-5 px-2 text-transparent bg-clip-text bg-gradient-to-r isolate from-primary to-pink-500">Featured Listning</h3>
            <Carousel
                opt={{
                    background: "red", // Set the background color
                    slidesToScroll: 1, // Scroll by one slide to match `basis-1/4`
                    dragFree: true, // Enable drag-free movement
                    align: "start", // Align slides to the start
                }}
                className="w-full bg-transparent"
            >
                <CarouselContent className="-ml-1 shadow-none">
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
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

    )
}
