import React from 'react'
import { IconType } from 'react-icons'
import { BiSliderAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const CategoryCard: React.FC<{name:string,description:string,icon:IconType}> = ({name,description,icon:Icon}) =>
    <Link to="#" className="2xl:py-20 lg:py-8 md:py-5 py-5 mb-4 bg-white rounded-2xl border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col  justify-center items-center">

        <div className="bg-orange-theme-lavender text-oran p-4 rounded-full mb-2">
            <Icon size={(window.innerWidth * 0.01) + (window.innerHeight * 0.02)} color={'#5C5CBC'} />
        </div>
        <h4 className='2xl:text-2xl lg:text-base mb-1'>{name}</h4>
        <p className=' 2xl:text-xl lg:text-sm text-xs text-[#536976] capitalize'>{description}</p>

    </Link>

export default CategoryCard