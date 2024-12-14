import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaUser, FaStar } from "react-icons/fa";

const UserDetailTab = () => {
    return (
        <div>
            <Tabs defaultValue="description" className="w-full px-0 py-2">
                <TabsList className="flex justify-start gap-2 md:gap-3 bg-background">
                    <TabsTrigger
                        value="description"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-secondary/60 bg-secondary/20 shadow hover:bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                        <FaUser size={16} />
                        Description
                    </TabsTrigger>
                    <TabsTrigger
                        value="seller"
                        className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-lg text-secondary/60 hover:bg-gray-100 data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                        <FaStar size={16} />
                        Seller Details
                    </TabsTrigger>
                </TabsList>

                {/* Tabs Content */}
                <TabsContent value="description">
                    <span className='px-2 py-3 space-y-4 text-gray-800'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos non laudantium sed minus! Assumenda optio omnis odio modi non delectus veniam quae facere rerum, dolore expedita aliquam fugit, corrupti necessitatibus similique corporis recusandae.
                    </span>
                </TabsContent>
                <TabsContent value="seller">
                    <div className="mt-8">
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-tblack">Reviews(10)</h3>

                            <div className="space-y-3 mt-4">
                                <div className="flex items-center">
                                    <p className="text-sm text-tblack font-semibold">5.0</p>
                                    <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                        <div className="w-[50%] h-full rounded bg-yellow-300"></div>
                                    </div>
                                    <p className="text-sm text-tblack font-semibold ml-3">66%</p>
                                </div>

                                <div className="flex items-center">
                                    <p className="text-sm text-tblack font-semibold">4.0</p>
                                    <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                        <div className="w-1/3 h-full rounded bg-yellow-300"></div>
                                    </div>
                                    <p className="text-sm text-tblack font-semibold ml-3">33%</p>
                                </div>

                                <div className="flex items-center">
                                    <p className="text-sm text-tblack font-semibold">3.0</p>
                                    <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                        <div className="w-1/6 h-full rounded bg-yellow-300"></div>
                                    </div>
                                    <p className="text-sm text-tblack font-semibold ml-3">16%</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start mt-8">
                            <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />

                            <div className="ml-3">
                                <h4 className="text-sm font-semibold text-tblack">John Doe</h4>
                                <div className="flex space-x-1 mt-1">
                                    <svg className="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <p className="text-xs !ml-2 font-semibold text-tblack">2 mins ago</p>
                                </div>
                                <p className="text-xs mt-4 text-tblack">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                            </div>
                        </div>

                        <button type="button" className="w-full mt-8 px-4 py-2.5 bg-transparent border border-yellow-300 text-yellow-300 font-semibold rounded">Read all reviews</button>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default UserDetailTab;
