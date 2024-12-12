import { Button } from '@nextui-org/react';
import React from 'react'

const page = async ({ params }) => {
  const { locale, id } = await params;
  return (
    <div className='bg-background'>
      {/* Details page is here */}
      {/* <h2>{locale}</h2> */}
      {/* <h2>{id}</h2> */}

      <div className="font-sans px-16">
        <div className="p-4 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2 w-full lg:sticky top-10 text-center">
              <div className=" bg-black/5 px-4 py-12 rounded-xl">
                <img src="https://readymadeui.com/images/coffee2.webp" alt="Product" className="w-9/12 rounded object-cover mx-auto" />
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
                <div className="w-[90px] h-20 flex items-cemter justify-center bg-black/5 rounded-xl p-4 cursor-pointer">
                  <img src="https://readymadeui.com/images/coffee3.webp" alt="Product2" className="w-full object-contain" />
                </div>
                <div className="w-[90px] h-20 flex items-cemter justify-center bg-black/5 rounded-xl p-4 cursor-pointer">
                  <img src="https://readymadeui.com/images/coffee4.webp" alt="Product2" className="w-full object-contain" />
                </div>
                <div className="w-[90px] h-20 flex items-cemter justify-center bg-black/5 rounded-xl p-4 cursor-pointer">
                  <img src="https://readymadeui.com/images/coffee5.webp" alt="Product2" className="w-full object-contain" />
                </div>
                <div className="w-[90px] h-20 flex items-cemter justify-center bg-black/5 rounded-xl p-4 cursor-pointer">
                  <img src="https://readymadeui.com/images/coffee6.webp" alt="Product2" className="w-full object-contain" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold text-tblack">Espresso Elegante | Coffee</h2>

              <div className="flex space-x-2 mt-4">
                <svg className="w-[18px] fill-yellow-300" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-[18px] fill-yellow-300" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-[18px] fill-yellow-300" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-[18px] fill-yellow-300" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg className="w-[18px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <h4 className="text-tblack text-base">500 Reviews</h4>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <p className="text-tblack text-4xl font-semibold">$12</p>
                <p className="text-gray-400 text-base"><strike>$16</strike> <span className="text-sm ml-1">Tax included</span></p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {/* <Button className="min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-semibold rounded">Buy now</Button> */}
                <Button variant='faded' color='default' fullWidth className="min-w-[200px] px-4 py-2.5 border">Add to cart</Button>
                <Button variant='solid' color='primary' fullWidth className="min-w-[200px] px-4 py-2.5 border">Add to cart</Button>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-tblack">About the coffee</h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-tblack">
                  <li>A cup of coffee is a beverage essential because of its timeless appeal</li>
                  <li>Easy to prepare. It can be brewed using various methods, from drip machines to manual pour-overs.</li>
                  <li>Available in various sizes, from a standard espresso shot to a large Americano, catering to different preferences.</li>
                  <li>You can customize your coffee by adding cream, sugar, or flavorings to suit your taste preferences.</li>
                </ul>
              </div>

              <div className="mt-8">
                <ul className="flex">
                  <li className="text-tblack font-semibold text-sm bg-gray-800 py-3 px-8 border-b-2 border-yellow-300 cursor-pointer transition-all">
                    Reviews</li>
                  <li className="text-tblack font-semibold text-sm py-3 px-8 cursor-pointer">Sellter</li>
                </ul>

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
                        <div className="w-2/3 h-full rounded bg-yellow-300"></div>
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

                    <div className="flex items-center">
                      <p className="text-sm text-tblack font-semibold">2.0</p>
                      <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-1/12 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm text-tblack font-semibold ml-3">8%</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-sm text-tblack font-semibold">1.0</p>
                      <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div className="bg-gray-400 rounded w-full h-2 ml-3">
                        <div className="w-[6%] h-full rounded bg-yellow-300"></div>
                      </div>
                      <p className="text-sm text-tblack font-semibold ml-3">6%</p>
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
            </div>
          </div>
        </div>
      </div>


      
    </div>
  )
}

export default page