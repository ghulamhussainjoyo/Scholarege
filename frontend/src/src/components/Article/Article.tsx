import React, { FC, Fragment } from 'react'
import { BsFacebook, BsLink45Deg } from 'react-icons/bs'
import { RiWhatsappFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import ArticleComment from './ArticleComment'
// import { IconType } from 'react-icons'


const SocialButtons = () => {
    return (
        <div className='flex mb-7'>
            {
                [{
                    key: 'facebook-link-button',
                    Icon: BsFacebook,
                    iconSize: 15,
                    iconColor: '#ffff',
                    name: 'share'
                },
                {
                    key: 'whattsApp-link-button',
                    Icon: RiWhatsappFill,
                    iconSize: 15,
                    iconColor: '#ffff',
                    name: 'whattsApp'
                },

                {
                    key: 'copy-link-button',
                    Icon: BsLink45Deg,
                    iconSize: 16,
                    iconColor: '#ffff',
                    name: 'copy link'
                },

                ].map(({ key, Icon, iconSize, iconColor, name }, index) =>
                    <button key={key}
                        type="button"

                        className="text-white bg-orange-theme-royal-orange-2 hover:bg-orange-theme-royal-orange focus:ring-2 focus:outline-none focus:ring-orange-theme-Beer font-medium rounded-md border-[1px] border-gray-300 text-sm px-2.5 py-2 text-center inline-flex items-center mr-2 font-owsawald-regular">

                        <span className='mr-2'>
                            <Icon
                                size={iconSize}
                                color={iconColor}
                            />
                        </span>
                        <span>
                            {name}
                        </span>
                    </button>
                )
            }
        </div>
    )
}


const Paragraph = () => {
    return (
        <section className="article-prargraph mb-10">
            <h1>Prototyping from A to Z: best practices for successful prototypes</h1>
            <p className="lead">Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals, datepickers.</p>
            <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p>
            <p>But then I found a <Link to="#">component library based on Tailwind CSS called Flowbite</Link>. It comes with the most commonly used UI components, such as buttons, navigation bars, cards, form elements, and more which are conveniently built with the utility classes from Tailwind CSS.</p>
            <h2>When does design come in handy?</h2>
            <p>While it might seem like extra work at a first glance, here are some key moments in which prototyping will come in handy:</p>
            <ol>
                <li><strong>Usability testing</strong>. Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live;</li>
                <li><strong>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying properly? Pass your prototype to your data protection team and they can test it for real;</li>
                <li><strong>Impressing a client</strong>. Prototypes can help explain or even sell your idea by providing your client with a hands-on experience;</li>
                <li><strong>Communicating your vision</strong>. By using an interactive medium to preview and test design elements, designers and developers can understand each other — and the project — better.</li>
            </ol>

        </section>
    )
}





function Article() {
    return (
        <article className='h-auto  w-2/3'>
            <h1 className="font-extrabold tracking-wider leading-none text-gray-900 text-sm sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white font-owsawald-regular  mb-7">
                Prototyping from A to Z: best practices for successful prototypes
            </h1>
            <SocialButtons />
            <Paragraph/>
            <ArticleComment/>

        </article>
    )
}

export default Article