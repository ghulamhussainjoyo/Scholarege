import React, { FC, useState, Dispatch, SetStateAction, Fragment } from 'react'
import { Avatar, Card } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { AiFillMessage } from 'react-icons/ai'


const CommentCrudDropdown: FC<{ toggleDropdown: boolean; setToggledropdown: Dispatch<SetStateAction<boolean>> }> = ({ toggleDropdown, setToggledropdown }) => {

    return (
        <div className="dropdown">

            <button
                id="dropdownMenuIconHorizontalButton"
                data-dropdown-toggle="dropdownDotsHorizontal"
                onClick={() => setToggledropdown(prev => !prev)}
                className="inline-flex items-center p-2 text-xs font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div id="dropdownDotsHorizontal"
                className={`${toggleDropdown ? 'visible' : 'hidden'} absolute  z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
            >
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <Link to="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                    </li>

                    <li>
                        <Link to="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                    </li>

                    <li>
                        <Link to="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                    </li>
                </ul>

            </div>

        </div>
    )
}






const Comment: FC = () => {

    const [toggleDropdown, setToggledropdown] = useState(false);
    const [showReplyBox, setReplyBox] = useState(false);


    return (
        <div className='mb-5 flex flex-col gap-3 border-[1px] border-gray-200 rounded-md px-5 py-4'>
            <div className="flex justify-between mb-0">
                <Avatar
                    size={'xs'}
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded={true}
                >
                    <div className="-space-y-1 dark:text-white">
                        <div>
                            <p className='text-sm'>
                                <span>Jese Leos </span>
                                <time className='text-gray-500' dateTime='11-12-2022' >
                                    Mar. 15, 2022.
                                </time>
                            </p>

                        </div>

                    </div>
                </Avatar>

                <CommentCrudDropdown
                    toggleDropdown={toggleDropdown}
                    setToggledropdown={setToggledropdown}
                />
            </div>
            <p
                className="font-light text-gray-500 dark:text-gray-400">
                Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.

            </p>

            <section className='flex items-center gap-1'>

                <AiFillMessage
                    size={20}
                    color={'#747474'}
                />
                <button
                    onClick={() => setReplyBox((prev) => !prev)}
                    className="inline-flex items-center font-normal text-gray-400 dark:text-blue-500 hover:underline">
                    Reply
                </button>
            </section>
            {showReplyBox ?

                <CommentReplyBox /> : <Fragment />
            }

        </div>
    )
}

const CommentReplyBox: FC = () => {

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="chat" className="sr-only">Your message</label>
            <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                <textarea
                    id="chat"
                    rows={1}
                    className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-orange-400 focus:ring-orange-theme-Beer focus:border-orange-theme-Beer dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message...">
                </textarea>
                <button
                    type="submit"
                    className="inline-flex justify-center p-2 text-orange-theme-royal-orange rounded-full cursor-pointer hover:bg-orange-100 dark:text-blue-500 dark:hover:bg-gray-600">
                    <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                        </path>
                    </svg>
                    <span className="sr-only">Send message</span>
                </button>
            </div>
        </form>
    )
}



function ArticleComment() {
    return (
        <section className="article-comment">
            <div className='flex justify-between mb-5'>
                <h3 className="text-4xl font-extrabold dark:text-white">
                    Discussion (20)
                </h3>
                <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Subscribe</button>
            </div>

            <form>
                <div className="w-full mb-5 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" rows={4} className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
                    </div>
                    <div
                        className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-orange-theme-royal-orange-2 rounded-lg focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-orange-theme-royal-orange">
                            Post comment
                        </button>
                    </div>
                </div>
            </form>

            <Comment />
            <Comment />
            <Comment />
            <Comment />

        </section>
    )
}

export default ArticleComment