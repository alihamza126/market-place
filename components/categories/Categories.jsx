import React from 'react'
import CategoryCard from '../common/CategoryCard'
import { FcTreeStructure } from "react-icons/fc";


const Categories = () => {
  return (
    <div className="px-2 md:px-20 my-10">
      <h3 className="text-3xl font-semibold py-5 px-0 md:px-2 text-primary-800/90 flex gap-2 items-center">Categories <FcTreeStructure size={25} /></h3>
      <div className='grid grid-cols-5 px-14 w-full  content-center'>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className='grid-cols-1 flex justify-center'><CategoryCard /></div>
        ))}
      </div>
    </div>
  )
}

export default Categories