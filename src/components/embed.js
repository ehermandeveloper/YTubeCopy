import React from "react";
import Seo from "./seo";

export default function Embed({embedLink}) {
  return (
    <div className="w-11/12 mx-auto">
       <Seo/>
        <div className="flex justify-center items-center">
      <iframe title="iframe"
        className="w-[140px] h-[215px] xs:w-[150px] xm:w-[300px] sm:w-[315px] md:w-[415px]"
        src={`${embedLink}`}
      ></iframe>
      </div>
    </div>
  );
}
