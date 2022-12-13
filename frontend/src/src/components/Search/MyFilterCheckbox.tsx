import { Checkbox, Label } from 'flowbite-react'
import React from 'react'

const MyFilterCheckbox:
  React.FC<{ name: string }> = ({ name }) => {

    return (
      <div className="flex items-center gap-2">
        <Checkbox id={name} />
        <Label className='4xl:text-2xl' htmlFor={name}>
          {name}
        </Label>
      </div>
    )
  }

export default MyFilterCheckbox