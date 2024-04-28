import React, { useEffect, useState } from "react";
import Axios from "axios";
import SearchBar from "../components/searchbar";
import Logo from "../img/logo_png.png";
import FileImg from "../img/file_cartoon_img.png";
import { Spin, message } from "antd";
import Videoaudiobtn from "../components/videoaudiobtn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Embed from "../components/embed";
import SearchIcon from '@mui/icons-material/Search';
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';
import WindowIcon from '@mui/icons-material/Window';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Seo from "../components/seo";

export default function Home() {
  // let ytURL = "https://youtu.be/NLvgU4b1dn0?si=kBbreT5d2KWGiS1q";
  //state change

  const [Data, setData] = useState([]);
  const [ytube, setYtube] = useState({
    spinner: false,
    error: false,
  });
  const [btnslide, setBtnSlide] = useState({
    va: true,
    v: false,
    a: false,
    tabledata: null,
  });
  const [hidebar, setHideBar] = useState(false);
  const [embedLink, setEmbedLink] = useState("");
  const [fournotfour,setFournotfour] = useState(false);
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};
 
  //check the yt link
  function matchYoutubeUrl(url) {
    var youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=.{11}|embed\/.{11}|v\/.{11}|.{11})|youtu\.be\/.{11})/;
    var youtubeShortsRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(shorts\/.{11})|youtu\.be\/.{11})/;

    if (youtubeRegex.test(url)) {
      return true;
    }

    if (youtubeShortsRegex.test(url)) {
      return true;
    }
    return false;
  }

  //all return data
  const getLink = async (value) => {
    if (value === null || value.trim() === "" || value === undefined) {
      message.error("Missing input field");
    } else if ((await matchYoutubeUrl(value)) === false) {
      message.error("incorrect link!");
    } else {
      await setYtube((pre) => ({ ...pre, error: false, spinner: true }));
      scrollToTop();
      let domElement = document.body;
      domElement.style.overflow = "hidden";
      const data = await Axios.get(
        `${process.env.REACT_APP_API_URL}/download?url=${encodeURIComponent(value)}&api_key=${process.env.REACT_APP_API_KEY}`
      );
      await setData(data.data.info);
      setEmbedLink(data.data.url);
      await setYtube((pre) => ({ ...pre, spinner: false }));
      await setHideBar(true);
      domElement.style.overflow = "auto";
    }
  };


  const AllFilerData =
    Data.length > 0
      ? Data.map((x) => ({
          formate: x.container,
          size:
            x.contentLength === undefined
              ? "-"
              : `${Math.round(x.contentLength / (1024 * 1024))} MB`,
          quality: x.qualityLabel === null ? "-" : x.qualityLabel,
          link: x.url,
          hasaudio: x.hasAudio,
          hasvideo: x.hasVideo,
        }))
      : null;

  //filter api datas
  const VandAFillter =
    AllFilerData === null
      ? null
      : AllFilerData.filter((x) => x.hasaudio === true && x.hasvideo === true); //video && audio
  const Vfillter =
    AllFilerData === null
      ? null
      : AllFilerData.filter((x) => x.hasaudio === false && x.hasvideo === true); //video
  const Afilter =
    AllFilerData === null
      ? null
      : AllFilerData.filter((x) => x.hasaudio === true && x.hasvideo === false); // Audio

  const VABtn = () => {
    setBtnSlide((pre) => ({
      ...pre,
      va: true,
      v: false,
      a: false,
      tabledata: VandAFillter,
    }));
  };

  const VBtn = () => {
    setBtnSlide((pre) => ({
      ...pre,
      va: false,
      v: true,
      a: false,
      tabledata: Vfillter,
    }));
  };

  const ABtn = () => {
    setBtnSlide((pre) => ({
      ...pre,
      va: false,
      v: false,
      a: true,
      tabledata: Afilter,
    }));
  };

  useEffect(() => {
      setBtnSlide({ va: true, v: false, a: false, tabledata: VandAFillter });
  }, [ytube]);

  const returnHome = () => {
    setHideBar(false);
  };


  return (
    <>
    {fournotfour === false ? <section className="relative">
      <Seo/>
    <div
      className={`${
        ytube.spinner === true
          ? "w-full h-[100vh] flex justify-center items-center bg-black-layer-body absolute top-0 z-[99]"
          : "hidden"
      }`}
    >
      <Spin size="large" />
    </div>

    <ul className="w-11/12 mx-auto flex flex-col gap-y-3 xm:gap-y-10">
      <div className="heading flex justify-center items-center gap-x-1 mt-5 xm:mt-32">
        <img className="w-[30px] xm:w-[60px]" src={Logo} alt="logo" />
        <h1 className="font-oswald xs:text-xl xm:text-4xl">YTubeCopy</h1>
      </div>
      <p className="paragraph font-ubuntu font-[600] text-center text-[10px] xs:text-[12px] xm:text-[14px] sm:text-[16px] ">
        YTubeCopy - YouTube Video Downloader <br />
        Download YouTube videos in MP3, and MP4 high quality for free
      </p>

      {hidebar === false ? (
        <SearchBar getLink={getLink} />
      ) : (
        <>
          {" "}
          <Embed embedLink={embedLink} />{" "}
          <Videoaudiobtn
            btnslide={btnslide}
            TableData={btnslide.tabledata}
            VABtn={VABtn}
            VBtn={VBtn}
            ABtn={ABtn}
          />
        </>
      )}

      <p className="font-ubuntu text-center text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px] text-gray-400 w-full px-2 ">
        How to download YouTube videos? <br />
        Paste YouTube url or enter keywords into the search box. <br />
        Choose output MP3 or MP4 format you want to download, then click
        "Download" button. 
      </p>

      <span className=" flex justify-center items-center ">
        <img className="w-[30%] md:w-fit" src={FileImg} alt="file_img" />
      </span>

      <div >
      <ul className="flex justify-center items-center gap-x-3 text-gray-400">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/herman-e-876849264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <LinkedInIcon className="block w-[20px] md:w-[27px]"/>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/her_m_a_n?igsh=NGowbnUzcGRpaW8y"
          >
            <InstagramIcon className="block w-[20px] md:w-[27px]"/>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/12herman"
          >
            <GitHubIcon className="block w-[20px] md:w-[27px]"/>
          </a>
        </li>
      </ul>
      <p className="font-ubuntu md:px-32 lg:px-72 text-center text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px] text-gray-400 w-full px-2 pt-1">
        <span className="font-oswald font-[400]">Developed by <span className="text-gray-500">Herman.E</span> </span>
      </p>
      <p className="paragraph font-ubuntu text-center text-[7px] xs:text-[8px] xm:text-[10px] sm:text-[12px] text-gray-400 w-full px-2 pb-5 ">
      <span className="font-oswald font-bold">YTubeCopy</span> is best YouTube
      Video Downloader that allow you to Download Video from YouTube quickly
      and for Free. <br />
      safest way to Download YouTube videos with HD Quality and no require to
      login or share personal information.
    </p>

    <span className="block pb-5">
    <ul className="flex justify-center items-center gap-x-3  text-gray-400 ">
          <li>
          <AdbIcon className="w-[20px] md:w-[27px]"/>
          </li>
          <li>
          <AppleIcon className="w-[20px] md:w-[27px]"/>
          </li>
          <li>
          <WindowIcon className="w-[20px] md:w-[27px]"/>
          </li>
          <li>
          <TravelExploreIcon className="w-[20px] md:w-[27px]"/>
          </li>
        </ul>
        <p className="font-ubuntu md:px-32 lg:px-72 text-center text-[7px] xs:text-[9px] xm:text-[10px] sm:text-[12px] lg:text-[14px] text-gray-400 w-full px-2 pt-3">
          Experience Unlimited Video Downloads with Our Top Free YouTube
          Downloader Choose Your Desired Format: MP4, MP3, SQ, HD, Full HD - <br/>
          Guaranteed High Quality with Each Download Download Videos Easily:
          Perfectly Compatible with Both Desktop and Mobile Devices<br/>
          Efficiently Download YouTube Videos through Our User-Friendly Online 
          Platform Fast Download Speeds and Access to a Vast Array of YouTube
          Videos at No Cost
        </p>
        
      </span>
    </div>
    </ul>
    {hidebar === true ? <button onClick={returnHome} className="fixed  left-[3.5%] top-[2%] md:top-[5%] md:left-[10%] z-50 w-[30px] h-[30px] xs:w-[34px] xs:h-[34px] xm:w-[40px] xm:h-[40px]  md:w-[56px] md:h-[56px] rounded-full flex justify-center items-center bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end cursor-pointer"><SearchIcon className="text-white"/></button> : null}
  </section>
: ""}
    </>
  );
}
