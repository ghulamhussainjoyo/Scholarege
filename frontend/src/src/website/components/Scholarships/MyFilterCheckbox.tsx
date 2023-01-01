import { Checkbox, Label } from "flowbite-react";
import React, { ChangeEvent } from "react";

const MyFilterCheckbox: React.FC<{
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> = ({ name, checked, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        style={{ textTransform: "capitalize" }}
        className="text-capitalize"
        id={name}
        name={name}
        value={name}
        checked={checked}
        onChange={onChange}
      />
      <Label className="4xl:text-2xl" htmlFor={name}>
        {name}
      </Label>
    </div>
  );
};

export default MyFilterCheckbox;
