import React from 'react'

const Loading = () => {
    return (
        <div className="p-4 px-14 lg:max-w-full max-w-2xl max-lg:mx-auto animate-pulse">
            <div className="grid items-start grid-cols-1 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-2 w-full lg:sticky top-10 text-center">
                    <div className="bg-gray-300 rounded-xl h-96"></div> {/* Placeholder for image */}
                    <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="w-[90px] h-20 flex items-center justify-center bg-gray-300 rounded-xl p-4">
                                <div className="w-full h-full bg-gray-400 rounded"></div> {/* Placeholder for thumbnails */}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <div className="bg-gray-300 h-8 w-3/4 mb-4"></div> {/* Placeholder for title */}
                    <div className="flex space-x-2 mt-4">
                        {[...Array(5)].map((_, index) => (
                            <svg key={index} className="w-[18px] fill-gray-300">
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <div className="bg-gray-300 h-8 w-16"></div>
                        <div className="bg-gray-300 h-8 w-16"></div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-8">
                        {[...Array(2)].map((_, index) => (
                            <div key={index} className="bg-gray-300 h-12 w-full"></div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <div className="bg-gray-300 h-6 w-1/2 mb-4"></div>
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="bg-gray-300 h-4 w-full mb-2"></div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <ul className="flex">
                            <div className="bg-gray-300 h-12 w-36"></div>
                            <div className="bg-gray-300 h-12 w-36 ml-4"></div>
                        </ul>
                        <div className="mt-8">
                            <div className="bg-gray-300 h-6 w-1/3 mb-4"></div>
                            {[...Array(5)].map((_, index) => (
                                <div key={index} className="flex items-center mb-3">
                                    <div className="bg-gray-300 h-6 w-12"></div> {/* Placeholder for rating */}
                                    <div className="bg-gray-300 h-2 w-full ml-3"></div> {/* Placeholder for review bar */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading