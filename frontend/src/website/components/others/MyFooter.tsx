import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsGithub, BsDribbble } from 'react-icons/bs'
import { Footer } from 'flowbite-react'
function FooterComponent() {
    return (
        <Footer container={true} className="">
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            href="https://flowbite.com"
                            src="https://flowbite.com/docs/images/logo.svg"
                            alt="Flowbite Logo"
                            name=""
                        >
                            <p className='2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm'>Study Baithak</p>
                        </Footer.Brand>
                    </div>
                    <div className="place-content-between gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">


                        <Footer.LinkGroup>

                            <Footer.Link href="#" className='2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm'>
                                Scholarships
                            </Footer.Link>
                            <Footer.Link href="#" className='2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm'>
                                Team
                            </Footer.Link>
                            <Footer.Link href="#" className='2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm'>
                                About
                            </Footer.Link>
                            <Footer.Link href="#" className='2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm'>
                                Contact
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        className='2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm'
                        href="#"
                        by="Study Baithak™"
                        year={2022}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                            className='w-56 h-56'
                            href="#"
                            icon={BsFacebook}
                        />
                        <Footer.Icon
                            href="#"
                            icon={BsInstagram}
                        />
                        <Footer.Icon
                            href="#"
                            icon={BsTwitter}
                        />
                        <Footer.Icon
                            href="#"
                            icon={BsGithub}
                        />
                        <Footer.Icon
                            href="#"
                            icon={BsDribbble}
                        />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterComponent