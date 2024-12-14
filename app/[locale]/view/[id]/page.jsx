import ProductGallery from '@/components/detailscomponent/ProductGallery';
import { Button, Chip, Link as NextLink, Tooltip } from '@nextui-org/react';
import { CheckCircleIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { FaTag } from "react-icons/fa6";
import { RiShoppingCartFill } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import UserDetailTab from '@/components/detailscomponent/UserDetailTab';


const page = async ({ params }) => {
  const { locale, id } = await params;
  return (
    <div className='bg-background'>
      <div className="px-2 md:px-16">
        <div className="p-4 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2 w-full top-10 text-center">
              <div className=' py-2 mx-5 text text-start flex items-center'>
                <Chip color="success" startContent={<CheckCircleIcon size={18} />} variant="faded">
                  Listed <span className=' text-sm text-gray-500'>3 weeks ago</span>
                </Chip>

              </div>
              <ProductGallery />
            </div>

            <div className="lg:col-span-2 py-10">
              <h2 className="text-3xl font-semibold text-tblack">Espresso Elegante | Coffee</h2>
              <div className='mx-0 pt-5 flex  gap-5'>
                <Tooltip content='Listing belong to Category' showArrow>
                  <Chip variant='shadow' color='primary' className='ps-2' startContent={<FaTag />}>Education</Chip>
                </Tooltip>
                <Tooltip isDismissable content='Click on anchor to open source link in new tab' showArrow>
                  <Chip variant='flat' color='secondary'>
                    <NextLink isExternal className='w-max' color='secondary' showAnchorIcon href="#">
                      Source Link
                    </NextLink>
                  </Chip>
                </Tooltip>

              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <p className="text-tblack text-4xl font-semibold">$12</p>
                <p className="text-gray-400 text-base"><strike>$16</strike> <span className="text-sm ml-1">Tax included</span></p>
              </div>

              <div className="flex md:flex-row md:flex-nowrap flex-wrap flex-col-reverse gap-4 mt-8">
                {/* <Button className="min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-semibold rounded">Buy now</Button> */}
                <Button variant='solid' color='primary' fullWidth className="min-w-[200px] px-4 py-2.5 border">Buy Now <RiShoppingCartFill size={20} color='white' /></Button>
                <Button variant='faded' color='default' fullWidth className="min-w-[200px] px-4 py-2.5 border">Add to Favorite <MdFavoriteBorder size={16} /></Button>
              </div>

              <div className="mt-10 flex flex-col gap-2 text-primary-800">
                <h2 className='py-3 text-2xl font-semibold flex gap-2 items-center'>Main Features <FaInfoCircle size={21} /></h2>
                <span className='flex items-center gap-4'><span className='text-primary-800'>Monetization enabled :</span> <Chip variant='flat' color='success'>Yes</Chip></span>
                <span className='flex items-center gap-4'><span className='text-primary-800'>Content  :</span> <Chip variant='flat' color='danger'>Yes</Chip></span>
                <span className=' flex text-nowrap '>Ways of promotion: <p className='ps-1 text-small leading-5 mt-1 text-tblack text-wrap'>no provide</p></span>
                <span className=' flex text-nowrap '>Sources of expense: <p className='ps-1 text-small leading-5 mt-1 text-tblack text-wrap'>not provide yet </p></span>
                <span className=' flex text-nowrap '>Sources of income: <p className='ps-1 text-small leading-5 mt-1 text-tblack text-wrap'>not provde yet</p></span>
                <span className=' flex text-nowrap '>To support the channel, you need: <p className='ps-1 text-small leading-5 mt-1 text-tblack text-wrap'>not provide</p></span>
              </div>

             

              <div className='mt-5'>
                <UserDetailTab />
              </div>
            </div>
          </div>
        </div>
      </div>



    </div >
  )
}

export default page