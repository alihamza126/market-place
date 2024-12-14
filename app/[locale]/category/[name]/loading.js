import React from 'react'

const loading = () => {
    return (
        <div className="container mx-auto py-5 p-4">
            {/* Breadcrumb Skeleton */}
            <div className="flex items-center space-x-2 mb-5 animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-16"></div>
                <span className="text-gray-400">/</span>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
                <span className="text-gray-400">/</span>
                <div className="h-4 bg-gray-300 rounded w-20"></div>
            </div>

            {/* Page Title Skeleton */}
            <div className="h-6 bg-gray-300 rounded w-48 mb-8 mt-5"></div>

            {/* Listing Cards Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="p-2 border rounded-md shadow-md animate-pulse"
                    >
                        {/* Image Placeholder */}
                        <div className="w-full h-40 bg-gray-300 rounded mb-4"></div>
                        {/* Title Placeholder */}
                        <div className="h-5 bg-gray-300 rounded w-32 mb-2"></div>
                        {/* Price Placeholder */}
                        <div className="h-4 bg-gray-300 rounded w-24"></div>
                        <div className="h-4 bg-gray-300 mt-1 rounded w-20"></div>
                    </div>
                ))}
            </div>

            {/* Pagination Skeleton */}
            <div className="mt-10 py-5 flex justify-center animate-pulse">
                <div className="h-10 bg-gray-300 rounded w-24"></div>
            </div>
        </div>

    )
}

export default loading