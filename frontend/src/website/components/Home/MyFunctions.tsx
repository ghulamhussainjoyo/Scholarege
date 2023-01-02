import React, { Fragment } from "react";
import SmallCard from "../others/SmallCard";

export const GetMostResecentArticle = () => {
  let width = window.innerWidth;

  if (width >= 2560) return <Fragment></Fragment>;
  else if (width >= 1920) return <Fragment></Fragment>;
  else if (width >= 1280) return <Fragment></Fragment>;
  else if (width >= 1024) return <Fragment></Fragment>;
  else if (width >= 768) return <Fragment></Fragment>;
  else return <Fragment></Fragment>;
};
