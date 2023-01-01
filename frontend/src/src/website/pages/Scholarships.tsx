import { Pagination } from "flowbite-react";
import React, {
  ChangeEvent,
  FormEvent,
  Fragment,
  useMemo,
  useRef,
  useState,
} from "react";

import BreadCrumbC from "../components/others/MyBreadCrumb";
import Header from "../components/Scholarships/Header";
import Filters from "../components/Scholarships/Filter";
import { SheetRef } from "react-modal-sheet";
import MyBottomSheet from "../components/Scholarships/MyBottomSheet";
import ArticlesContainer from "../components/Scholarships/ArticlesContainer";
import { useGetAllArticlesQuery } from "../../redux/service/article.service";
import ScholarshipContainer from "../components/Scholarships/ScholarshipContainer";

// Main Componnet------------------------->

const scholarshipFilters = {
  Doctoral: false,
  Graduate: false,
  Inrermediate: false,
  Masters: false,
  Undergraduate: false,
};

const oppertunitiesFilter = {
  Conference: false,
  Events: false,
  "Exchange Program": false,
  Fellowships: false,
  Interships: false,
  "Summer Program": false,
  "Professional Development": false,
  "Training Program": false,
  Workshops: false,
};

const regionFilter = {
  USA: false,
  UK: false,
  Canada: false,
  China: false,
  Austrailia: false,
  France: false,
  Russia: false,
  Germany: false,
  Japan: false,
  Spain: false,
};

function Scholarships() {
  const breadCrumbList = ["home", "scholarship"];
  const color_royal_orange = "#EB9E47";

  const [girdView, setGridView] = useState(true);

  const [_search, _setSearch] = useState("");

  const [isOpenBottomSheet, setOpenBottomSheet] = useState(false);

  const [_scholarshipFilter, _setScholarshipFilter] =
    useState(scholarshipFilters);

  const [_oppertunityFilter, _setOppertunityFilter] =
    useState(oppertunitiesFilter);

  const [_regionFilter, _setRegionFilter] = useState(regionFilter);

  const bottomsheetRef = useRef<SheetRef>(null);
  const snapTo = (i: number) => bottomsheetRef.current?.snapTo(i);

  // MEMO
  const scholarshipFilterMemo = useMemo(() => {
    return Object.keys(_scholarshipFilter)
      .filter(
        (key) =>
          _scholarshipFilter[key as keyof typeof _scholarshipFilter] === true
      )
      .join();
  }, [_scholarshipFilter]);

  const oppertunityFilterMemo = useMemo(() => {
    return Object.keys(_oppertunityFilter)
      .filter(
        (key) =>
          _oppertunityFilter[key as keyof typeof _oppertunityFilter] === true
      )
      .join();
  }, [_oppertunityFilter]);

  const categoryFilterMemo = useMemo(() => {
    const oppertunity = Object.keys(_oppertunityFilter).filter(
      (key) =>
        _oppertunityFilter[key as keyof typeof _oppertunityFilter] === true
    );

    const scholarship = Object.keys(_scholarshipFilter).filter(
      (key) =>
        _scholarshipFilter[key as keyof typeof _scholarshipFilter] === true
    );

    return [...scholarship, ...oppertunity].join();
  }, [_oppertunityFilter, _scholarshipFilter]);

  const regionFilterMemo = useMemo(() => {
    return Object.keys(_regionFilter)
      .filter(
        (key) => _regionFilter[key as keyof typeof _regionFilter] === true
      )
      .join();
  }, [_regionFilter]);

  console.log(categoryFilterMemo);

  const {
    data: articles,
    isFetching,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetAllArticlesQuery({
    heading: _search,
    category: categoryFilterMemo,
    region: regionFilterMemo,
  });

  // console.log({ articles, isFetching, isError, isSuccess, error, isLoading });

  // BottomSheet Handler ⬇️
  const handleOnClickBottomSheet = () => {
    console.log("bottomSheet");
    setOpenBottomSheet(true);
  };

  // Grid View Handler ⬇️
  const handleOnClickGridView = () => {
    setGridView(true);
    console.log("gridView handled");
  };

  // List View Handler ⬇️
  const handleOnClickListView = () => {
    setGridView(false);
    console.log("ListView handled");
  };

  // Search Click Handler ⬇️
  const handleOnSearchClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("searchInput");
  };

  const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    _setSearch(event.target.value);
    console.log(_search);
  };

  // Filter Checkbox change ⬇️
  const handleScholarshipFilterChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    _setScholarshipFilter((prev) => ({ ...prev, [name]: checked }));
  };

  const handleOppertunityFilterChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    _setOppertunityFilter((prev) => ({ ...prev, [name]: checked }));
  };

  const handleRegionFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    _setRegionFilter((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <Fragment>
      <Header />

      {/* <body className='flex sm:mr-20 sm:ml-20 m-5 sm:m-0  justify-center '> */}
      <section className="lg:mx-20 md:mx-10 xl:mx-32 mx-5">
        {articles?.article && (
          <main className="max-w-full">
            <BreadCrumbC name="Scholarships" breadCrumbList={breadCrumbList} />
            <ScholarshipContainer
              articlesData={articles}
              searchValue={_search}
              isGirdView={girdView}
              scholarshipFilter={_scholarshipFilter}
              oppertunitiesFilter={_oppertunityFilter}
              regionFilter={_regionFilter}
              LeftCompoenent={Filters}
              RightComponent={ArticlesContainer}
              iconColor={color_royal_orange}
              handleOnClickBottomSheet={handleOnClickBottomSheet}
              handleOnClickGridView={handleOnClickGridView}
              handleOnClickListView={handleOnClickListView}
              handleOnSearchClick={handleOnSearchClick}
              onInputChange={onSearchInputChange}
              handleScholarshipFilterChange={handleScholarshipFilterChange}
              handleOppertunityFilterChange={handleOppertunityFilterChange}
              handleRegionFilterChange={handleRegionFilterChange}
            />

            <div className="flex justify-center mb-20">
              <Pagination
                className="text-red-500"
                color="gray"
                currentPage={1}
                totalPages={100}
                onPageChange={(onPageChange) => console.log(onPageChange)}
              />
            </div>
          </main>
        )}

        {/* Opens to 400 since initial index is 1 */}
        <MyBottomSheet
          ref={bottomsheetRef}
          snapTo={snapTo}
          isOpenBottomSheet={isOpenBottomSheet}
          setOpenBottomSheet={setOpenBottomSheet}
          snapPoints={[400, 300, 200, 0]}
          initialSnap={0}
        />
      </section>
    </Fragment>
  );
}

export default Scholarships;
