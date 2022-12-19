import React from 'react'
import { Card as CardBite, Badge as BadgeBite } from 'flowbite-react'
import { HiArrowSmRight } from 'react-icons/hi'

function Card() {
    return (
        <CardBite href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
                Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-300">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>

            <BadgeBite
                color={'gray'}
                icon={HiArrowSmRight} size="sm">
                Intermeddiate
            </BadgeBite>
        </CardBite>
    )
}

export default Card