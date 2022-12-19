import React, { useEffect } from 'react'
import { Label, TextInput } from 'flowbite-react'

import { setArticleValue } from '../../redux/slice/Article.slice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux.hooks';
import { useSelector } from 'react-redux';



function Oppertunity() {

    const dispatch = useAppDispatch();
    const { article } = useAppSelector((state) => state.article);
    // console.log(article);



    return (
        <section>
            <div className="flex flex-col gap-4 mt-10">
                <Label htmlFor="heading">
                    Heading
                </Label>
                <TextInput
                    value={article?.heading}
                    type="text"
                    id="heading"
                    placeholder="Disabled input"
                    disabled={false}
                    onChange={(event) => dispatch(setArticleValue({
                        heading:
                            event.target.value
                    }))}
                />

                <Label htmlFor="description">
                    Description
                </Label>
                <TextInput
                    value={article?.description}
                    onChange={(event) => dispatch(setArticleValue({
                        description:
                            event.target.value
                    }))}
                    style={{ outline: 'none' }}
                    className='outline-none focus:ring-2 focus:ring-orange-400'
                    type="text"
                    id="description"
                    placeholder="Disabled input"
                    disabled={false}
                />

                <label
                    htmlFor="scholarshipType"
                    className="block text-sm font-medium text-gray-900 dark:text-white">
                    Select Type Of Oppertunity
                </label>
                <select
                    value={article?.category}
                    onChange={(event) => dispatch(setArticleValue({
                        category:
                            event.target.value
                    }))}
                    id="scholarshipType"
                    className="bg-gray-50 border border-gray-300 
                 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                  block w-full p- 
                 2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                  dark:text-white 
                 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option selected>Choose a country</option>
                    <option value="United States">United States</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                </select>


                <label
                    htmlFor="scholarshipType"
                    className="block text-sm font-medium text-gray-900 dark:text-white">
                    Select Region
                </label>
                <select
                    value={article?.region}
                    onChange={(event) => dispatch(setArticleValue({
                        region:
                            event.target.value
                    }))}
                    id="scholarshipType"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                     rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>

            </div>
        </section>
    )
}

export default Oppertunity