import React, { Fragment } from 'react'

const Header:React.FC = () => {
        return (
            <Fragment>
                <header
                    className='sm:mt-10 flex flex-col sm:flex-row justify-center items-center bg-orange-theme-cultered sm:p-10 rounded-lg '>
                    <h1 className="lg:text-6xl sm:text-4xl text-2xl text-center sm:text-left uppercase font-extrabold  z-10 text-orange-theme-dark-gunmetal px-5 py-5 sm:px-0 sm:py-0">
                        <span>find various kinds of fully-funded
                            <span className='text-orange-theme-royal-orange'> Scholarship </span>
                            including national & Internationaly</span>
                    </h1>
                    <img
                        className='w-fit h-fit hidden sm:block'
                        
                        src={require('../../asset/images/bussiness.png')}
                        alt="scholarship" />
                </header>
                <hr className="h-px mb-20 bg-gray-200 border-0 dark:bg-gray-700" />
            </Fragment>
        );
    }

export default Header