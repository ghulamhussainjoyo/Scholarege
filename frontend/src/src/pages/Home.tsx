import React, { } from 'react'
import img from '../asset/images/scholarship.png';
import HomeHeader from '../components/Home/MyHeader';
import { BiSliderAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import LinkRightDirection from '../components/LinkDirection';
import { HiArrowNarrowRight, HiArrowSmRight, HiLightBulb } from 'react-icons/hi';
import { Badge } from 'flowbite-react';
import { BsFillCalendar2EventFill, BsFillPlayFill } from 'react-icons/bs';
import { GetMostResecentArticle } from '../components/Home/MyFunctions'
import CategoryCard from '../components/Home/CategoryCard';
import AboutCard from '../components/Home/AboutCard';
import ServiceCard from '../components/Home/ServiceCard';
import { FaGraduationCap, FaSchool, FaStethoscope } from 'react-icons/fa';
import { RiExchangeBoxFill, RiTeamFill } from 'react-icons/ri';
import { GiRingmaster, GiRoundTable } from 'react-icons/gi';
import { FcConferenceCall } from 'react-icons/fc';


// --------- Component ---------------------->
function Home() {

    return (
        <body className='font-owsawald-regular'>

            <HomeHeader scholarshipImage={img} />

            <main className="sm:mx-14 md:mx-10 lg:mx-20 mx-5">



                {/* Scholarship section */}
                <section className='home-scholarship sm:my-52'>

                    <section className="flex justify-between sm:mb-5">
                        <div>
                            <p className='text-orange-theme-royal-orange text 2xl:text-2xl'>scholarships</p>
                            <h1 className="2xl:text-6xl sm:text-3xl text-2xl text-orange-theme-dark-gunmetal font-extrabold capitalize mb-5">
                                Most recent
                                <span
                                    className='text-orange-theme-royal-orange'> Scholarship</span>
                            </h1>
                        </div>

                        <LinkRightDirection
                            name={'View all'}
                            nameSize={'2xl:text-2xl'}
                            iconColor={'#EB9E47'}
                            Icon={HiArrowNarrowRight}
                            iconSize={20}

                        />
                    </section>

                    <section className='flex flex-col sm:flex-row  gap-6 sm:justify-between'>

                        <div className="flex flex-col flex-[2] gap-3">
                            <img
                                className=' sm:bg-no-repeat sm:mb-5'
                                src={require('../asset/images/medium-colleagues.jpg')} alt="" />

                            <h5 className="text-2xl 2xl:text-5xl font-bold tracking-tight text-gray-600 dark:text-white sm:mb-2">
                                Noteworthy technology acquisitions 2021
                            </h5>

                            <p className="sm:text-sm md:text-base lg:text-lg 2xl:text-2xl font-normal text-gray-700 dark:text-gray-300 sm:mb-2">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>

                            <div className='sm:w-28 2xl:w-28 sm:mb-10'>
                                <Badge
                                    color={'gray'}
                                    icon={HiArrowSmRight} size="sm">
                                    Intermeddiate
                                </Badge>
                            </div>

                            <LinkRightDirection
                                name={'Read more'}
                                nameSize={'2xl:text-2xl'}
                                iconColor={'#EB9E47'}
                                Icon={HiArrowNarrowRight}
                                iconSize={20}

                            />
                        </div>

                        <div className="flex-1">
                            {<GetMostResecentArticle />}
                        </div>

                    </section>

                </section>


                {/* categories Section */}
                <section className="categories text-center rounded-md bg-orange-theme-cultered sm:my-52 my-20 pt-10">

                    <p className='2xl:text-xl xl:text-lg lg:text-base text-sm text-orange-theme-royal-orange'>Categories</p>
                    <h1
                        className="2xl:text-6xl sm:text-3xl text-2xl text-orange-theme-dark-gunmetal font-extrabold capitalize">
                        <span>Categories of each </span>
                        <br />
                        <span className='text-orange-theme-royal-orange'>
                            Scholarship
                        </span>
                    </h1>


                    <div className="grid sm:grid-cols-4 grid-cols-2 2xl:p-24 lg:p-16 md:p-7 p-5 2xl:gap-10 lg:gap-5 md:gap-4 gap-3">
                        <CategoryCard
                            name='Intermediate'
                            description='Intermediate Scholarships'
                            icon={FaSchool}
                        />

                        <CategoryCard
                            name='Graduate'
                            description='Graduate Scholarships'
                            icon={FaGraduationCap}
                        />

                        <CategoryCard
                            name='Master'
                            description='Master Scholarships'
                            icon={GiRingmaster}
                        />


                        <CategoryCard
                            name='Doctoral'
                            description='Doctoral Scholarships'
                            icon={FaStethoscope}
                        />

                        <CategoryCard
                            name='Events'
                            description='Events Oppertunity'
                            icon={BsFillCalendar2EventFill}
                        />

                        <CategoryCard
                            name='Exchange'
                            description='Exchange Programs'
                            icon={RiExchangeBoxFill}
                        />


                        <CategoryCard
                            name='Fellowships'
                            description='Fellowships oppertunity'
                            icon={RiTeamFill}
                        />

                        <CategoryCard
                            name='Conference'
                            description='Conference oppertunity'
                            icon={GiRoundTable}
                        />




                    </div>

                </section>

                {/* Plan Quide */}
                <section className="home-about-us sm:my-52 my-20">
                    <div className="about-cards sm:gap-20 flex flex-col sm:flex-row">
                        <section className='md:flex-[2] flex-[1]'>
                            <p className='2xl:text-2xl text-orange-theme-royal-orange'>
                                Quide Tips
                            </p>
                            <h1
                                className="2xl:text-6xl sm:text-3xl text-2xl text-orange-theme-dark-gunmetal font-extrabold capitalize mb-5">
                                <span>
                                    <span>
                                        Are you planning to study{" "}
                                    </span>
                                    <span className='text-orange-theme-royal-orange'>
                                        abroad?
                                    </span>
                                </span>


                            </h1>
                            <p className='2xl:text-xl text-sm text-gray-400 mb-5'>
                                We have written the steps of guidance and professional tips. Find The StudyBaithak blog category where it is given you the best tips and recommendations related to your Journey of getting fully funded Scholarships and studying abroad.
                            </p>

                            <div className="flex items-center justify-between ">
                                <button
                                    type="button"
                                    className="text-white bg-orange-theme-royal-orange hover:bg-orange-theme-Beer focus:ring-4 focus:ring-orange-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-theme-royal-orange focus:outline-none sm:mr-6">
                                    Get Started
                                </button>
                                <div className='float-right mb-3'>
                                    <LinkRightDirection
                                        name={'Read more quide'}
                                        nameSize={'2xl:text-2xl'}
                                        iconColor={'#EB9E47'}
                                        Icon={HiArrowNarrowRight}
                                        iconSize={20}

                                    />
                                </div>

                            </div>

                        </section>

                        <section className='relative md:flex-[1.5] sm:flex-[2] flex-[1.5]'>
                            <img
                                className='w-full h-full rounded-tr-2xl rounded-bl-2xl'
                                src={require('../asset/images/students-with-laptop.jpg')} alt="quide-img"
                            />
                            <Link
                                to={"/chilgoza"}
                                className="absolute sm:top-[40%] sm:-left-2 top-[40%] left-[45%] rounded-md z-50 square w-10 h-10 
                                bg-orange-theme-royal-orange flex justify-center items-center cursor-pointer">
                                <BsFillPlayFill
                                    color='#ffff'
                                    size={30}
                                />
                            </Link>
                        </section>
                    </div>
                </section>

                {/* Our Service */}
                <section className="categories rounded-md bg-orange-theme-cultered sm:my-52 my-20 sm:py-20 px-5 py-10 ">

                    <div className="flex flex-col text-center justify-center items-center 2xl:my-20">
                        <p className='text-orange-theme-royal-orange 2xl:text-xl xl:text-lg lg:text-base text-sm'>
                            Service
                        </p>
                        <h1
                            className="2xl:text-6xl sm:text-3xl text-2xl text-orange-theme-dark-gunmetal font-extrabold capitalize mb-5">
                            {/* <span className='text-orange-theme-royal-orange'>
                                Services{" "}
                            </span> */}
                            <span>Our Services</span>

                        </h1>
                    </div>


                    <div className="about-cards flex  sm:flex-row flex-col  sm:gap-4 2xl:gap-7 justify-center">


                        <ServiceCard
                            title={"Information"}
                            description={
                                "The studybaithak promotes its services under three sections including StudyBaithak makes your bucket full with the latest information regarding fully funded Scholarships Abroad, Exchange Programs, Internships and different Conferences."
                            }
                        />

                        <ServiceCard
                            title={"Consultancy"}
                            description={
                                "Consultancy is the crucial function to have you on the right path under experts and experienced people. We arrange Group and one-to-one sessions. We believe in making interactions physically and getting success together"
                            }
                        />

                        <ServiceCard
                            title={"Mentoring sessions"}
                            description={
                                "The StudyBaithak team facilitates students by arranging in-person awareness sessions regarding Scholarships and conducting different workshops who are enthusiastic to make their journey starting abroad."
                            }
                        />


                    </div>
                </section>

                {/* About Section */}
                <section className="home-about-us sm:my-24 my-20">

                    <div className="flex flex-col justify-center items-center my-5 2xl:my-20">
                        <p className='text-orange-theme-royal-orange 2xl:text-xl xl:text-lg lg:text-base text-sm'>About us</p>
                        <h1
                            className="2xl:text-6xl sm:text-3xl text-2xl text-orange-theme-dark-gunmetal font-extrabold capitalize mb-5 text-center">
                            Free {" "}
                            <span className='text-orange-theme-royal-orange'>
                                Scholarship
                            </span>
                            <br />
                            Provide By Study Baithak
                        </h1>
                    </div>


                    <div className="about-cards flex flex-col sm:flex-row 2xl:gap-7 sm:gap-4 gap-3 ">
                        <AboutCard
                            name='Fully Funded'
                            description='Study Baithak provides fully funded scholarships'
                            icon={FaGraduationCap}
                        />

                        <AboutCard
                            name='Oppertunites'
                            description='Study Baithak provides fully funded scholarships'
                            icon={HiLightBulb}
                        />

                        <AboutCard
                            name='Exchange Program'
                            description='Study Baithak provides fully funded scholarships'
                            icon={RiExchangeBoxFill}
                        />

                    </div>

                </section>

            </main>


            {/* <Footer /> */}

        </body >
    )
}

export default Home