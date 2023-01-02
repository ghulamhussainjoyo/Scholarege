import React, { ChangeEvent, FormEvent } from "react";
import { IArticles } from "../../../src/common/interface/Article.interface";

import { interfaceRightComponent as IArticlesContainer } from "./ArticlesContainer";

const ScholarshipContainer: React.FC<{
  LeftCompoenent: React.FC<{
    iconColor: string;
    scholarshipFilter: { [key: string]: boolean };
    oppertunitiesFilter: { [key: string]: boolean };
    regionFilter: { [key: string]: boolean };
    handleScholarshipFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleOppertunityFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleRegionFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }>;
  RightComponent: React.FC<IArticlesContainer>;
  searchValue: String;
  iconColor: string;
  isGirdView: boolean;
  articlesData: IArticles;
  scholarshipFilter: { [key: string]: boolean };
  oppertunitiesFilter: { [key: string]: boolean };
  regionFilter: { [key: string]: boolean };

  handleOnClickBottomSheet: () => void;
  handleOnClickGridView: () => void;
  handleOnClickListView: () => void;
  handleOnSearchClick: (event: FormEvent<HTMLFormElement>) => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleScholarshipFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOppertunityFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRegionFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({
  LeftCompoenent,
  RightComponent,
  iconColor,
  isGirdView,
  searchValue,
  scholarshipFilter,
  oppertunitiesFilter,
  handleScholarshipFilterChange,
  handleOppertunityFilterChange,
  handleRegionFilterChange,
  regionFilter,
  handleOnClickBottomSheet,
  handleOnClickGridView,
  handleOnClickListView,
  handleOnSearchClick,
  onInputChange,
  articlesData,
}) => {
  return (
    <section className="flex mt-5 sm:mt-10 mb-10 sm:mb-15 lg:mb-20 sm:flex-row flex-col sm:gap-10">
      <div className="hidden lg:flex flex-col md:flex-[2]">
        <LeftCompoenent
          iconColor={iconColor}
          scholarshipFilter={scholarshipFilter}
          oppertunitiesFilter={oppertunitiesFilter}
          regionFilter={regionFilter}
          handleScholarshipFilterChange={handleScholarshipFilterChange}
          handleOppertunityFilterChange={handleOppertunityFilterChange}
          handleRegionFilterChange={handleRegionFilterChange}
        />
      </div>
      <div className="lg:flex-[6]">
        <RightComponent
          articleData={articlesData}
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
  );
};

export default ScholarshipContainer;
