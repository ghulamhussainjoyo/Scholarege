import React from 'react'
import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'

function LinkRightDirection(
    { name, Icon, iconColor, iconSize,nameSize }
        :
        { name: string,nameSize:string,Icon: IconType, iconColor: string, iconSize: number }) {
    return (
        <Link to="#" className={`inline-flex items-center font-medium text-[${iconColor}] hover:underline ${nameSize}`}>
            {name}
            <Icon className='mt-1' size={iconSize} color={iconColor} />
        </Link>
    )
}

export default LinkRightDirection