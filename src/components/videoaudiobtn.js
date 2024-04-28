import React from "react";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import Table from "./table";
import Seo from "./seo";

export default function Videoaudiobtn({
  btnslide,
  TableData,
  VABtn,
  VBtn,
  ABtn,
}) {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Seo/>
        <section className="flex justify-around items-center gap-x-6 w-[90%] xm:w-[50%] xl:w-[30%] bg-white rounded-full relative ">
          <button
            onClick={VABtn}
            className={`flex justify-center items-center gap-x-1 text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px] z-10 font-ubuntu  py-2 md:py-3 ${
              btnslide.va === true ? "text-white" : "text-gray-400"
            }`}
          >
            <PlayCircleOutlineOutlinedIcon fontSize="small" />{" "}
            <span className="hidden lg:block">V & A</span>{" "}
            <HeadphonesOutlinedIcon fontSize="small" />
          </button>
          <button
            onClick={VBtn}
            className={`flex justify-center items-center gap-x-1 text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px] z-10 font-ubuntu pl-0 md:pr-0  py-2 md:py-3 ${
              btnslide.v === true ? "text-white" : "text-gray-400"
            }`}
          >
            {" "}
            <PlayCircleOutlineOutlinedIcon fontSize="small" />{" "}
            <span className="hidden lg:block">Video</span>
          </button>
          <button
            onClick={ABtn}
            className={`flex justify-center items-center gap-x-1 text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px] z-10 font-ubuntu pr-3 md:pr-0 py-2 md:py-3  ${
              btnslide.a === true ? "text-white" : "text-gray-400"
            }`}
          >
            {" "}
            <HeadphonesOutlinedIcon fontSize="small" />{" "}
            <span className="hidden lg:block">Audio</span>
          </button>
          <span
            className={`rounded-full w-[30%] transition-all ease-in-out h-full absolute top-0 bg-blue-extra-dark ${
              btnslide.va === true &&
              btnslide.v === false &&
              btnslide.a === false
                ? "left-0"
                : btnslide.va === false &&
                  btnslide.v === true &&
                  btnslide.a === false
                ? " left-[38%]"
                : btnslide.va === false &&
                  btnslide.v === false &&
                  btnslide.a === true
                ? "left-[70%]"
                : "left-0"
            }`}
          ></span>
        </section>
      </div>

      <Table TableData={TableData} />
    </div>
  );
}
