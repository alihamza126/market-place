import React from 'react'
import { Card, CardBody, CardFooter } from '@nextui-org/react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const CategoryCard = () => {
  return (
    <div className='w-[170px]'>
      <Card isPressable radius='sm' className='w-[170px]'>
        <CardBody className="overflow-visible p-0 ">
          <Image
            alt={'education'}
            className="w-full object-cover h-[160px]"
            radius="lg"
            shadow="sm"
            src={'https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg'}
            width={200}
            height={200}
          />
        </CardBody>
      </Card>
      <div className="group bg-background w-full flex py-2 mt-2 px-1 cursor-pointer items-center text-sm justify-between">
        <p className=' text-tblack'>Education</p>
        <ArrowRight size={18} className='group-hover:translate-x-1 duration-100' />
      </div>
    </div>
  )
}

export default CategoryCard