import React from 'react'

function ServiceCard({title,description}:{title:string,description:string}) {
    return (
        <div
            className="card sm:w-1/3 w-full p-4 2xl:p-7 border border-slate-200 rounded-2xl hover:shadow-md sm:hover:border-gray-200 mb-5" >

            <h2 className='font-bold text-slate-800'>{title}</h2>

            <p className='font-normal text-gray-400 text-sm 2xl:text-2xl lowercase'>
                {description}
            </p>

        </div>
    )
}

export default ServiceCard