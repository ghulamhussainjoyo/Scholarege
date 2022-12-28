import React, { FormEvent, ChangeEvent, Fragment } from "react";
import { BsGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { HiFilter } from "react-icons/hi";
import MyIconButton from "../others/MyIconButton";
import SearchInput from "./SearchInput";
import ArticleCards from "../others/MyArticleCard";
import { ActionIcon } from "@mantine/core";
import { useGetAllArticlesQuery } from "../../redux/service/article.service";
import { v4 as uuid4 } from "uuid";
export interface interfaceRightComponent {
  iconColor: string;
  isGirdView: boolean;
  searchValue: String;
  handleOnClickBottomSheet: () => void;
  handleOnClickGridView: () => void;
  handleOnClickListView: () => void;
  handleOnSearchClick: (event: FormEvent<HTMLFormElement>) => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// >----------------------------------------------------------<
const ArticlesContainer: React.FC<interfaceRightComponent> = ({
  iconColor,
  isGirdView,
  searchValue,
  handleOnClickBottomSheet,
  handleOnClickGridView,
  handleOnClickListView,
  onInputChange,
  handleOnSearchClick,
}) => {
  const { data, isFetching, isLoading, isError, error, isSuccess } =
    useGetAllArticlesQuery();
  console.log(data);
  console.log(isFetching);

  return (
    <Fragment>
      <div className="w-full">
        {/* Scholar Header */}
        <section className="flex gap-4 2xl:gap-10 justify-between mb-5 lg:mb-10">
          <SearchInput
            key={"grid-icon-button"}
            btnBg={"bg-orange-theme-royal-orange"}
            btnFocusBg={"bg-orange-theme-Beer"}
            btnHoverBg={"bg-orange-theme-Beer"}
            btnfocusRingClr={"ring-mello-apricot"}
            onInputChange={onInputChange}
            onClick={handleOnSearchClick}
            searchValue={searchValue}
          />
          <div className="hidden lg:flex sm:items-center  ">
            <MyIconButton
              key={"grid-icon-button"}
              btnBg={
                isGirdView ? "bg-orange-theme-royal-orange" : "bg-gray-300"
              }
              btnFocusBg={"bg-orange-theme-Beer"}
              btnHoverBg={isGirdView ? "bg-orange-theme-Beer" : "bg-black"}
              btnfocusRingClr={"ring-mello-apricot"}
              Icon={BsGridFill}
              iconColor={isGirdView ? "#ffff" : "#64748b"}
              iconSize={24}
              onClick={handleOnClickGridView}
            />
            <MyIconButton
              key={"list-icon-button"}
              btnBg={
                !isGirdView ? "bg-orange-theme-royal-orange" : "bg-gray-300"
              }
              btnFocusBg={"bg-orange-theme-Beer"}
              btnHoverBg={
                !isGirdView ? "bg-orange-theme-royal-orange" : "bg-slate-50"
              }
              btnfocusRingClr={"ring-mello-apricot"}
              Icon={FaThList}
              iconColor={!isGirdView ? "#ffff" : "#64748b"}
              iconSize={24}
              onClick={handleOnClickListView}
            />
          </div>

          {/* mobile Filter  */}
          <div className="visible lg:hidden">
            <ActionIcon
              id="dropdownDividerButton"
              data-dropdown-toggle="dropdownDivider"
              className="w-full h-full text-white bg-slate-200 hover:bg-slate-300 focus:ring-2 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm px-4 py-2 text-center flex justify-center items-center"
              type="button"
              onClick={() => handleOnClickBottomSheet()}
            >
              <HiFilter color="#536976" size={24} />
              {/* Dropdown divider */}
            </ActionIcon>
          </div>
        </section>

        {/* Scholarships */}

        <section
          className={`grid grid-col-1 ${
            isGirdView
              ? "lg:grid-cols-2 3xl:grid-cols-3"
              : "lg:grid-cols-1 3xl:grid-cols-2"
          } gap-4`}
        >
          {!isFetching ? (
            <Fragment>
              {isError && <p>{JSON.stringify(error)}</p>}
              {isSuccess &&
                data?.article.map((article) => (
                  <ArticleCards
                    articleID={article.articleID}
                    key={uuid4()}
                    heading={article.heading}
                    description={article.description}
                    category={article.category}
                  />
                ))}
            </Fragment>
          ) : (
            <Fragment>Fetching....</Fragment>
          )}
        </section>
      </div>
    </Fragment>
  );
};

export default ArticlesContainer;
