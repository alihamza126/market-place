import React from 'react'
import ProductCard from './ProductCard'
import { Chip } from '@nextui-org/react'


const CategoryList = ({ locale, name = 'technology', data = ['', '', '', '',] }) => {
    return (
        <div className="px-1 md:px-20 my-4">
            <div>
                <div className='flex justify-between items-center  py-5'>
                    <h3 className="text-3xl font-semibold  text-tblack capitalize"><Chip color='secondary' className=' text-lg' title='category' size='lg' variant='shadow'>{name}</Chip></h3>
                    <Chip color='secondary' className=' cursor-pointer' variant='faded'>View All</Chip>
                </div>
                <div className='grid grid-cols-4 gap-x-1.5  gap-y-4  md:gap-3 w-full  content-center'>
                    {data.map((_, index) => (
                        <div key={index} className=' col-span-2 md:col-span-1 flex justify-center'>
                            <ProductCard locale={locale} isPress={true} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryList