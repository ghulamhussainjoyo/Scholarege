import React, { Fragment } from "react";

// ----------- Interface ------------------------->
interface HomeHeaderProps {
  scholarshipImage: string;
}

// -------- Component ------------------------->
function HomeHeaderBody({ scholarshipImage }: HomeHeaderProps) {
  return (
    <Fragment>
      <header className="home-header">
        <section className="text-center my-5 4xl:my-10 3xl:my-10 lg:mx-10 mx-0">
          <h1 className="4xl:text-7xl 3xl:text-6xl text-3xl font-bold my-2">
            Scholarship Opertunities
          </h1>
          <p className="4xl:text-4xl 3xl:text-3xl 2xl:my-10 md:text-sm lg:text-base text-sm sm:mx-20 mx-5 text-center text-slate-500">
            StudyBaithak provides you all information related to Study essences
            such as International and National Fully-Funded Scholarships,
            Exchange Programs, Internships and Conferences. Along with that,
            StudyBaithak gives you an opportunity of Consulting with the
            experts, professionals and alumni in-person and virtually and make
            possible to accomplish your goals.
          </p>
        </section>

        <section
          className="flex sm:flex-row flex-col-reverse justify-between  items-center gap-4 
                bg-orange-theme-cultered lg:px-10 sm:px-0 px-5 py-5 mx-3 rounded-md"
        >
          <section className="_search w-full ">
            <div className=" rounded-md shadow-md 4xl:my-5 3xl:my-4 ">
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 4xl:ml-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full h-full p-4 pl-10 4xl:p-6 4xl:pl-20 text-sm 4xl:text-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-theme-Beer focus:border-orange-theme-Beer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 4xl:bottom-5 4xl:right-4 bg-orange-theme-royal-orange hover:bg-orange-theme-Beer focus:ring-2 focus:outline-none focus:ring-orange-theme-royal-orange-2 font-medium rounded-lg text-sm px-4 py-2 4xl:px-8 4xl:py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                                    
                                        "
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <p className="4xl:text-3xl 3xl:text-2xl text-sm my-2 mx-2 font-normal text-gray-400">
              Worried about what to write? You can browse the latest
              scholarships and other programs here.
            </p>
          </section>

          <section className="_intro relative w-full">
            <div className="_website-name font-semibold absolute 4xl:top-[20%] 4xl:right-[20%] 3xl:right-[18%] sm:right-[25%] sm:top-[30%] right-[20%] top-[40%] uppercase text-right 4xl:text-9xl 3xl:text-8xl lg:text-5xl text-4xl z-50 text-slate-700">
              <h2 className="4xl:text-8xl 3xl:text-7xl lg:text-4xl text-2xl">
                <span>Free </span>
                <span className="text-[#EB9E47]">Scholarship</span>
              </h2>

              <h1>
                for Every Bright
                <br />
                Student
              </h1>
            </div>
            <img
              className="4xl:w-1/4 3xl:w-1/4 w-36 sm:w-40 lg:w-48 h-auto -z-50 float-right"
              src={scholarshipImage}
              alt="scholarship"
            />
          </section>
        </section>
      </header>
    </Fragment>
  );
}

export default HomeHeaderBody;

{
  /* <div className="header-body">
<div className="search">
    <div className="search-container rounded-md shadow-md">
        {
            filterSelected ?
                <HomeFilterBadge
                    filterSelected={filterSelected}
                    Icon={badgeIcon}
                    iconSize={badgeIconSize}
                    iconColor={'#ffff'}
                    handleOnFilterSelect={handleOnFilterSelect}
                />
                :

                <HomeFilter
                    Icon={filterIcon}
                    iconSize={filterIconSize}
                    iconColor={filterIconColor}
                    filterActiveToggler={filterActiveToggler}
                    handleFilterToggler={handleFilterToggler}
                    handleOnFilterSelect={handleOnFilterSelect}
                />
        }
        {/* Search Input }

        <form className='search-form' action="">
            <input type="search" className="search" placeholder="search" required />
            <button className='search-btn'>search</button>
        </form>
    </div>
    <p className='findScholarship'>Find Your Scholarship</p>
</div>


Website name and image 
<div className="intro">
    <div className="website-name font-semibold">
        <h2>Free <span className='text-[#EB9E47]'>Scholarship</span> </h2>
        <h1>for Every Bright Student</h1>
    </div>
    <img src={scholarshipImage} alt="scholarship" />
</div>
</div> */
}
