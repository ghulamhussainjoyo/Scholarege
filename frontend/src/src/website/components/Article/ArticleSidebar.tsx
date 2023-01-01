import React from "react";
import StickyBox from "react-sticky-box";
import SmallCard from "../others/SmallCard";

function ArticleSidebar() {
  return (
    <StickyBox className="-mt-5">
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      {/* <SmallCard /> */}
    </StickyBox>
  );
}

export default ArticleSidebar;
