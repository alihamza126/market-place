import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "../common/ProductCard"

export function CarouselListing() {
    return (
        <div className="px-20 flex justify-center">
            <Carousel
                opt={{
                    background: "transparent", // Set the background color
                    slidesToScroll: 1, // Scroll by one slide to match `basis-1/4`
                    dragFree: true, // Enable drag-free movement
                    align: "start", // Align slides to the start
                }}
                className="w-full"
            >
                <CarouselContent
                    opt={{
                        background: "red", // Set the background color
                        slidesToScroll: 1, // Scroll by one slide to match `basis-1/4`
                        dragFree: true, // Enable drag-free movement
                        align: "start", // Align slides to the start
                    }}
                    className="-ml-1">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-2 md:basis-1/3 select-none  lg:basis-1/4 flex-shrink-0"
                        >
                            <div className="p-1 shadow border">
                                <ProductCard isPress={false}/>
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
