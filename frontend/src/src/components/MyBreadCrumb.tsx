import React, { Fragment } from 'react'
import { Breadcrumb } from 'flowbite-react'
function BreadCrumbC({ name, breadCrumbList }: { name: string, breadCrumbList: Array<string> }) {
    return (
        <Fragment>

            <div>

                <Breadcrumb className="" aria-label="Default breadcrumb example text-9xl">
                    {
                        breadCrumbList.map((value, index) =>
                            <Breadcrumb.Item key={index} href="#"
                            className='text-9xl'
                            >
                                <p className='4xl:text-2xl'> {value}</p>
                            </Breadcrumb.Item>)
                    }
                </Breadcrumb>

                {name && <h1 className="mt-4 2xl:text-4xl font-bold text-3xl text-gray-700">{name}</h1>}

            </div>


        </Fragment>
    )
}

export default BreadCrumbC