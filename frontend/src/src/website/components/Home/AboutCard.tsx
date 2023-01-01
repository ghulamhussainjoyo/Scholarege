import React from 'react'
import { IconType } from 'react-icons';


const AboutCard: React.FC<{name:string,description:string,icon:IconType}> = ({name,description,icon:Icon}) => (
    <div
        className="card sm:w-1/3 flex flex-row items-center gap-5 sm:flex-col sm:items-start sm:gap-0 w-full p-4 2xl:p-7 border border-gray-100 rounded-2xl hover:shadow-md sm:hover:border-gray-200" >

        <div
            className="circle-avatar w-14 h-14 2xl:w-32 2xl:h-32 bg-orange-theme-lavender text-oran p-4 rounded-xl flex items-center justify-center mb-2">
            <Icon size={52} color={'#5C5CBC'} />
        </div>
        <div>
            <h3 className='font-bold 2xl:text-4xl'>{name}</h3>
            <p className='font-normal text-gray-400 text-sm 2xl:text-2xl lowercase'>{description}</p>
        </div>
    </div>
);

export default AboutCard