import React from 'react'
import CategoryList from '../common/categoryList'

const CatLists = ({ locale }) => {
  const catData = [
    { name: 'Computer' },
    { name: 'Grapics' },
    { name: 'Technology' },
    { name: 'Education' },
  ]
  return (
    <div>
      {catData.map((data, index) => (
        <div key={index} className='grid-cols-1 flex justify-center'>
          <CategoryList name={data.name} locale={locale}/>
        </div>
      ))}
    </div>
  )
}

export default CatLists