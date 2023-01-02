import { ActionIcon } from '@mantine/core';
import React from 'react'
import { IconType } from 'react-icons'

interface IconButtonProps {

    onClick: () => void;
    btnBg: string;
    btnHoverBg: string;
    btnFocusBg: string;
    btnfocusRingClr: string
    Icon: IconType;
    iconColor: string;
    iconSize: number;

}
function IconButtonC({
    onClick,
    btnBg,
    btnHoverBg,
    btnFocusBg,
    btnfocusRingClr,
    Icon,
    iconColor,
    iconSize, 
}: IconButtonProps
) {
    return (
        <ActionIcon 
            size={'xl'}
            onClick={onClick}
            type="button"
            className={`text-white ${btnBg} hover:${btnHoverBg} focus:ring-0 focus:outline-none  focus:${btnfocusRingClr}  font-medium rounded-lg text-sm p-2.5 text-center mr-2`}>
            <Icon
                size={window.innerWidth*0.02}
                color={iconColor}
    
            />
            <span className="sr-only">Icon description</span>
        </ActionIcon>
    )
}

export default IconButtonC