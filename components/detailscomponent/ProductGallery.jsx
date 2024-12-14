"use client"
import Image from 'next/image';
import React from 'react'
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ProductGallery = () => {
    const productDetailItem = [
        {
            original:
                "/dummy/1.png",
            thumbnail:
                "/dummy/1.png",
            sizes: '200',
            height: "200px"
        },
        {
            original:
                "/dummy/2.png",
            thumbnail:
                "/dummy/2.png",
            sizes: '200',
            height: "200px"
        },
        {
            original:
                "/dummy/3.png",
            thumbnail:
                "/dummy/3.png",
            sizes: '200',
            height: "200px"
        },

    ];

    return (
        <div className="w-full container mx-auto px-4 overflow-hidden">
            <ReactImageGallery
                showBullets={false}
                showFullscreenButton={true}
                showPlayButton={false}
                items={productDetailItem}
                lazyLoad={true}
                showNav={false}
                renderItem={(item) => (
                    <div className='w-full rounded-lg overflow-hidden'>
                        <Image
                            quality={100}
                            height={768}
                            width={1024}
                            layout="intrinsic" // or "responsive" to maintain aspect ratio
                            src={item.original} className='w-full h-full object-cover' alt={item.original} />
                    </div>
                )}

            />
        </div>
    )
}

export default ProductGallery