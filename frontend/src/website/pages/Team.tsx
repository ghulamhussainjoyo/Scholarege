import React, { FC } from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { Card } from "flowbite-react";

const SocialIcons: FC = () => {
  return (
    <div className="social-icons flex gap-4">
      <button
        type="button"
        className="text-gray-400 bg-gray-200 hover:bg-orange-theme-royal-orange  hover:text-white focus:ring-4 focus:outline-none 
        focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
      >
        <BsLinkedin />
        <span className="sr-only">Icon description</span>
      </button>

      <button
        type="button"
        className="text-gray-400 bg-gray-200 border hover:bg-orange-theme-royal-orange hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
      >
        <BsGithub />
        <span className="sr-only">Icon description</span>
      </button>

      <button
        type="button"
        className="text-gray-400 bg-gray-200 border  hover:bg-orange-theme-royal-orange hover:text-white focus:ring-4 focus:outline-none 
        focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
      >
        <BsFacebook />
        <span className="sr-only">Icon description</span>
      </button>
    </div>
  );
};

const TeamSection: FC<{ flexDirection: string; name: string }> = ({
  flexDirection,
  name,
}) => {
  return (
    <section
      className={`flex p-20 items-center justify-between flex-${flexDirection} gap-10`}
    >
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-5xl font-extrabold dark:text-white">{name}</h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          distinctio ad magnam possimus nam quisquam quod necessitatibus, nisi
          laudantium harum facilis dolor beatae esse perferendis suscipit illo
          ipsam itaque! Exercitationem!
        </p>
        <div className="Badges">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            B.ed
          </span>

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            Default
          </span>

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            Default
          </span>
        </div>

        <SocialIcons />
      </div>
      <div className="">
        <img
          className="max-w-sm h-auto rounded-lg"
          src={require("../asset/images/ghulamhussain1.jpg")}
          alt="ghulam hussain"
        ></img>
      </div>
    </section>
  );
};

interface teamSection2 {
  alignItems: string;
  name: string;
  description: string;
  education: string;
  skills: Array<string>;
  flexDirection: string;
  animationUrl: string;
  index: number;
}

const TeamSection2: FC<teamSection2> = ({
  alignItems,
  name,
  description,
  education,
  skills,
  flexDirection,
  animationUrl,
  index,
}) => {
  return (
    <section
      className={`flex flex-col px-24 mx-10 py-10 mb-20 ${
        index === 0 ? "bg-orange-theme-lavender" : ""
      }`}
    >
      <div
        className={`flex items-center justify-between mb-6 ${flexDirection}`}
      >
        {/* <img className='w-1/3 h-1/3' src={require(`../asset/images/${animationUrl}`)} alt="" /> */}
        <h1 className="text-4xl font-extrabold tracking-tighter  text-gray-900 md:text-7xl lg:text-9xl dark:text-white">
          <span>{name.split(" ")[0]}</span>
          <br />
          <span>{name.split(" ")[1]}</span>
        </h1>
        <img
          className="max-w-sm h-auto rounded-lg"
          src={require("../asset/images/ghulamhussain1.jpg")}
          alt="ghulam hussain"
        />
      </div>

      <div
        className={`flex flex-col gap-4 text-${alignItems}  items-${alignItems}`}
      >
        <h4 className="text-gray-400">{education}</h4>

        <p>{description}</p>

        <div className="Badges">
          {skills.map((skill, index) => (
            <span
              key={index + Date.now().toString()}
              className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
            >
              {skill}
            </span>
          ))}
        </div>

        <SocialIcons />
      </div>
    </section>
  );
};

const TeamSection3: FC = () => {
  return (
    <section
      className={`flex px-20 py-10 mb-20 gap-10 mx-10 rounded-md bg-orange-theme-lavender`}
    >
      <Card>
        <div
          className={`flex flex-col gap-4 text-center items-center justify-center `}
        >
          <img
            className="max-w-xs h-auto rounded-lg"
            src={require("../asset/images/ghulamhussain1.jpg")}
            alt="ghulam hussain"
          />

          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Ghulam hussain
          </h1>

          <h4 className="text-gray-400">Full Stack developer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            porro natus autem consequuntur optio ut, excepturi quis vitae,
            reprehenderit totam nam iste repellat quo non atque, cupiditate
            illo. Necessitatibus, illum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Possimus assumenda voluptatibus neque earum
            dolorum, aperiam labore tenetur in, minima minus quibusdam atque hic
            fugiat maiores deserunt adipisci id eum? Sunt?
          </p>

          <div className="Badges">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              B.ed
            </span>

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              Default
            </span>

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              Default
            </span>
          </div>
          <SocialIcons />
        </div>
      </Card>

      <Card>
        <div
          className={`flex flex-col gap-4 text-center items-center justify-center `}
        >
          <img
            className="max-w-xs h-auto rounded-lg"
            src={require("../asset/images/ghulamhussain1.jpg")}
            alt="ghulam hussain"
          />

          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Danish Jumani
          </h1>
          <h4 className="text-gray-400">Bachelor's in Education</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            porro natus autem consequuntur optio ut, excepturi quis vitae,
            reprehenderit totam nam iste repellat quo non atque, cupiditate
            illo. Necessitatibus, illum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Possimus assumenda voluptatibus neque earum
            dolorum, aperiam labore tenetur in, minima minus quibusdam atque hic
            fugiat maiores deserunt adipisci id eum? Sunt?
          </p>

          <div className="Badges">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              B.ed
            </span>

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              Default
            </span>

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              Default
            </span>
          </div>
          <SocialIcons />
        </div>
      </Card>
    </section>
  );
};

function Team() {
  return (
    <body className="font-owsawald-regular mt-5">
      <main className="flex sm:mr-20 sm:ml-20 m-5 sm:m-0  justify-center ">
        <section className="">
          <header className="mb-28 mt-20 mx-32 4xl:mx-40">
            <section className="flex ">
              <div className="flex gap-2 items-center -rotate-90 w-40 -ml-10">
                <hr className="w-10 h-[2px] bg-gray-400 rounded border-0 dark:bg-gray-700" />
                <p className="text-gray-400 tracking-widest text-2xl">
                  inspiration
                </p>
              </div>

              <div className="mx-40 mt-24">
                <p className="text-gray-500">We love working here</p>
                <p>We love working here</p>
              </div>
            </section>

            <section className="flex justify-end bg-orange-200">
              <h1 className="mb-4 text-4xl font-extrabold  leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">
                We{" "}
                <mark className="px-2 mb-10 text-white bg-orange-theme-royal-orange rounded dark:bg-blue-500">
                  Stand
                </mark>
                <br />
                For Teams
              </h1>
            </section>

            <section className="flex items-center gap-4 ">
              <img src={require("../asset/images/team.png")} alt="team-img" />
              <p className="">
                We Believe team can do remarkable work - when they actually get
                to work. The 60% of each we spend on email, Meeting, and status
                updates. That's is not it. It's Pushing boundries, solve
                problems, and making some thing reall.
              </p>
            </section>
          </header>

          <h1 className="my-20 text-4xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Our Team
          </h1>

          {/* <TeamSection3 /> */}

          <TeamSection2
            index={1}
            alignItems="end"
            flexDirection="flex-row"
            animationUrl="meeting-gif.gif"
            name="Ghulam Hussain"
            education={"Software Engineer"}
            skills={["Frontend developer", "Backend developer", "Algorithms"]}
            description={
              "Meet our Technical Head of StudyBaithak, Mr Ghulam Hussain who has pursued his studies in the Department of Computer from the University of 145th Rank in Asia Sukkur IBA University. He has been serving his commitment in the career of technology under Full Stack Developer for the last three years. He works as a Technical Head in the StudyBaithak"
            }
          />

          <TeamSection2
            index={1}
            alignItems="start"
            flexDirection="flex-row-reverse"
            animationUrl="meeting-gif.gif"
            name="Danish Jumani"
            education={"Bachelor's in Education"}
            skills={["Team Lead", "Marketing"]}
            description={
              "Meet the Marketing Director of our team StudyBaithak, Mr Danish who has pursued his education in the field of Training of teachers and leadership Management at Sukkur IBA University which is the Top 145th rank in Asian countries. Further, he has an influencer, Co-director of the Captain Climate and Ek Kahani project under UNICEF and UNDP and being Tech-Savvy, he works as a Social Marketing manager, content creator and project manager in StudyBaithak."
            }
          />
        </section>
      </main>
    </body>
  );
}

export default Team;

//   {/* <h1 className=' float-right mr-[20%] tracking-widest capitalize text-7xl font-extrabold '>
//                         <span>we </span>
//                         <span className='text-orange-theme-royal-orange'>
//                             Stand
//                         </span>

//                         <br />
//                         <span>
//                             For Teams
//                         </span>
//                     </h1> */}
