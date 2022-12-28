import React, { ChangeEvent, FormEvent } from 'react'

const SearchInput
    : React.FC<{
        onClick: (event: FormEvent<HTMLFormElement>) => void;
        onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
        searchValue: String;
        btnBg: string;
        btnHoverBg: string;
        btnFocusBg: string;
        btnfocusRingClr: string

    }> = ({ btnBg,
        btnFocusBg,
        btnHoverBg,
        btnfocusRingClr,
        onClick,
        onInputChange,
        searchValue
    }) => {
        return (
            <form className='sm:w-full flex-1' onSubmit={onClick}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true"
                            className="w-5 h-5 4xl:ml-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search"
                        className="block w-full h-full p-4 pl-10 4xl:p-6 4xl:pl-20 text-sm 4xl:text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-theme-Beer focus:border-orange-theme-Beer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                        placeholder="Search..." required

                    />
                    <button type="submit"
                        className="text-white absolute right-2.5 sm:bottom-2.5 bottom-2 4xl:bottom-5 4xl:right-4 bg-orange-theme-royal-orange hover:bg-orange-theme-Beer focus:ring-2 focus:outline-none focus:ring-orange-theme-royal-orange-2 font-medium rounded-lg text-sm px-4 py-2 4xl:px-8 4xl:py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                
                    ">
                        Search
                    </button>
                </div>
            </form>

        )
    }
export default SearchInput