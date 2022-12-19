import React, { useState } from "react";
import { ActionIcon } from "@mantine/core";
import { IconType } from "react-icons";

interface IconButtonProps {
  onClick: () => void;
  btnBg: string;
  isGridView: boolean;
  btnFocusBg: string;
  btnfocusRingClr: string;
  Icon: IconType;
  iconColor: string;
  iconSize: number;
}
function IconButtonC({
  onClick,
  btnBg,
  isGridView,
  btnFocusBg,
  btnfocusRingClr,
  Icon,
  iconColor,
  iconSize,
}: IconButtonProps) {
  const [hoverBgColor, setBgColor] = useState<string>();

  return (
    <ActionIcon
      size={"xl"}
      onClick={onClick}
      type="button"
      className={`text-white ${btnBg} hover:${hoverBgColor} focus:ring-0 focus:outline-none  focus:${btnfocusRingClr}  font-medium rounded-lg text-sm p-2.5 text-center mr-2`}
      onMouseOver={() => {
        isGridView ? setBgColor("bg-red-400") : setBgColor("bg-pink-400");
      }}
      onMouseOut={() => {
        isGridView ? setBgColor("bg-orange-400") : setBgColor("bg-black");
      }}
    >
      <Icon size={window.innerWidth * 0.02} color={iconColor} />
      <span className="sr-only">Icon description</span>
    </ActionIcon>
  );
}

export default IconButtonC;
