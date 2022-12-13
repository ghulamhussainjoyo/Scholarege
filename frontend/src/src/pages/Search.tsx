import { Pagination } from 'flowbite-react';
import React, { ChangeEvent, FormEvent, Fragment, useRef, useState } from 'react';
import BreadCrumbC from '../components/MyBreadCrumb';

import Header from '../components/Search/Header'
import Filters from '../components/Search/Filter'

import { SheetRef } from 'react-modal-sheet'
import MyBottomSheer from '../components/Search/MyBottomSheet';

import ArticlesContainer, { interfaceRightComponent as interfaceArticlesContainer } from '../components/Search/ArticlesContainer';


const ScholarshipContainer: React.FC<{
    LeftCompoenent: React.FC<{ iconColor: string }>,
    RightComponent: React.FC<interfaceArticlesContainer>,
    searchValue: String,
    iconColor: string,
    isGirdView: boolean,
    handleOnClickBottomSheet: () => void,
    handleOnClickGridView: () => void,
    handleOnClickListView: () => void,
    handleOnSearchClick: (event: FormEvent<HTMLFormElement>) => void;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({
    LeftCompoenent,
    RightComponent,
    iconColor,
    isGirdView,
    searchValue,
    handleOnClickBottomSheet,
    handleOnClickGridView,
    handleOnClickListView,
    handleOnSearchClick,
    onInputChange,
}
) => {
        // hidden lg:flex flex-col

        return (

            <section className='flex mt-5 sm:mt-10 mb-10 sm:mb-15 lg:mb-20 sm:flex-row flex-col sm:gap-10'>
                <div className='hidden lg:flex flex-col md:flex-[2]'>
                    <LeftCompoenent iconColor={iconColor} />
                </div>
                <div className='lg:flex-[6]'>
                    <RightComponent
                        iconColor={iconColor}
                        isGirdView={isGirdView}
                        handleOnClickBottomSheet={handleOnClickBottomSheet}
                        handleOnClickGridView={handleOnClickGridView}
                        handleOnClickListView={handleOnClickListView}
                        handleOnSearchClick={handleOnSearchClick}
                        onInputChange={onInputChange}
                        searchValue={searchValue}
                    />
                </div>

            </section>

        )
    }


// Main Componnet------------------------->

function Search() {

    const [girdView, setGridView] = useState(true)
    const [_search, _setSearch] = useState('');
    const [isOpenBottomSheet, setOpenBottomSheet] = useState(false);

    const bottomsheetRef = useRef<SheetRef>(null);
    const snapTo = (i: number) => bottomsheetRef.current?.snapTo(i);

    const breadCrumbList = ['home', 'scholarship']
    const color_royal_orange = '#EB9E47';

    // BottomSheet Handler
    const handleOnClickBottomSheet = () => {
        console.log("bottomSheet")
        setOpenBottomSheet(true)

    }

    // Grid View Handler
    const handleOnClickGridView = () => {
        setGridView(true)
        console.log('gridView handled')
    }

    // List View Handler
    const handleOnClickListView = () => {
        setGridView(false)
        console.log('ListView handled')
    }

    // Search Click Handler
    const handleOnSearchClick = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('searchInput')

    }

    const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        _setSearch(event.target.value);
        console.log(_search)
    }

    return (

        <Fragment>
            <Header />
            {/* <body className='flex sm:mr-20 sm:ml-20 m-5 sm:m-0  justify-center '> */}
            <body className='lg:mx-20 md:mx-10 xl:mx-32 mx-5'>

                <main className='max-w-full'>
                    <BreadCrumbC
                        name='Scholarships'
                        breadCrumbList={breadCrumbList}
                    />

                    <ScholarshipContainer
                        searchValue={_search}
                        isGirdView={girdView}
                        LeftCompoenent={Filters}
                        RightComponent={ArticlesContainer}
                        iconColor={color_royal_orange}
                        handleOnClickBottomSheet={handleOnClickBottomSheet}
                        handleOnClickGridView={handleOnClickGridView}
                        handleOnClickListView={handleOnClickListView}
                        handleOnSearchClick={handleOnSearchClick}
                        onInputChange={onSearchInputChange}
                    />

                    <div className='flex justify-center mb-20'>
                        <Pagination
                            className='text-red-500'
                            color='gray'
                            currentPage={1}
                            totalPages={100}
                            onPageChange={(onPageChange) => console.log(onPageChange)}
                        />
                    </div>

                </main>

                {/* Opens to 400 since initial index is 1 */}
                <MyBottomSheer
                    ref={bottomsheetRef}
                    snapTo={snapTo}
                    isOpenBottomSheet={isOpenBottomSheet}
                    setOpenBottomSheet={setOpenBottomSheet}
                    snapPoints={[400, 300, 200, 0]}
                    initialSnap={0}
                />


            </body>
        </Fragment>
    )
}

export default Search