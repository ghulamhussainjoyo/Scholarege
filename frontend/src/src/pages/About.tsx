import React, { FC } from 'react'



const TeamSection: FC<{ flexDirection: string, name: string }> = ({ flexDirection, name }) => {
    return (
        <section className={`flex p-20 items-center justify-between flex-${flexDirection} gap-10`}>

            <div className='flex-1 flex flex-col gap-4'>
                <h1 className="text-5xl font-extrabold dark:text-white">{name}</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci distinctio ad magnam possimus nam quisquam quod necessitatibus, nisi laudantium harum facilis dolor beatae esse perferendis suscipit illo ipsam itaque! Exercitationem!
                </p>

            </div>
            <div className=''>
                <img className="max-w-sm h-auto rounded-lg" src={require('../asset/images/ghulamhussain1.jpg')} alt="ghulam hussain"></img>
            </div>
        </section>
    )
}




function About() {
    return (
        <body className='h-4/5'>

            <h1 className="mb-10 mt-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
                <span>About </span>
                <span className='text-orange-theme-royal-orange'>
                    Study Baithak
                </span>
            </h1>
            <header className='center mb-20'>


                <p className='text-center  text-2xl px-20 font-owsawald-regular tracking-widest text-gray-700'>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error nostrum facilis nihil iure inventore! Quasi voluptas, sed porro qui amet eum alias quia reiciendis suscipit. Quisquam voluptatibus laborum accusantium!

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim totam iure quis delectus possimus aliquid iste dicta veritatis ea deserunt accusamus voluptatem animi esse, explicabo ad vel. Maiores, dolor. Quam.

                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam praesentium temporibus quia eaque dolorum, at molestiae nobis culpa provident incidunt necessitatibus repellendus aliquam voluptate sit ipsum minima sint qui. Culpa.
                    </p>

                </p>
            </header>


            {/* <section className={`flex bg-orange-theme-lavender mx-10 px-24 py-10 rounded-md items-center justify-between flex-row gap-10`}>
                <div className='flex-1 flex flex-col gap-4'>
                    <h1 className="text-5xl font-extrabold dark:text-white">What we Provide </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci distinctio ad magnam possimus nam quisquam quod necessitatibus, nisi laudantium harum facilis dolor beatae esse perferendis suscipit illo ipsam itaque! Exercitationem!
                    </p>

                </div>
                <div className=''>
                    <img className="max-w-sm h-auto rounded-lg" src={require('../asset/images/ghulamhussain1.jpg')} alt="ghulam hussain"></img>
                </div>
            </section> */}


            {/* <section className={`flex mx-10 px-24 py-10 rounded-md items-center justify-between flex-row-reverse gap-10`}>
                <div className='flex-1 flex flex-col gap-4'>
                    <h1 className="text-5xl font-extrabold dark:text-white">
                        About Scholarships
                    </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci distinctio ad magnam possimus nam quisquam quod necessitatibus, nisi laudantium harum facilis dolor beatae esse perferendis suscipit illo ipsam itaque! Exercitationem!
                    </p>

                </div>
                <div className=''>
                    <img className="max-w-sm h-auto rounded-lg" src={require('../asset/images/ghulamhussain1.jpg')} alt="ghulam hussain"></img>
                </div>
            </section> */}
        </body>
    )
}

export default About