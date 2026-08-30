import React from "react";
import MegaServices from "./MegaServices";
import MegaPortfolio from "./MegaPortfolio";

function MegaMenus({ active }) {
  return (
    <>
      <MegaServices active={active} />
      <MegaPortfolio active={active} />
    </>
  );
}

export default MegaMenus;
