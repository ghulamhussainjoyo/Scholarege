import React from 'react'
import { Label, TextInput } from 'flowbite-react'
function Scholarshop() {
    return (
        <section>
            <div className="flex flex-col gap-4 mt-10">
                <Label htmlFor="heading">
                    Heading
                </Label>
                <TextInput
                    type="text"
                    id="heading"
                    placeholder="Disabled input"
                    disabled={false}
                />

                <Label htmlFor="description">
                    Description
                </Label>
                <TextInput
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
                    Select Type Of Scholarship
                </label>
                <select id="scholarshipType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>


                <label
                    htmlFor="scholarshipType"
                    className="block text-sm font-medium text-gray-900 dark:text-white">
                    Select Region
                </label>
                <select id="scholarshipType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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

export default Scholarshop