/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio, SiYoutubekids, SiYoutubemusic, SiTrendmicro, SiStylelint } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight, PiLightbulbLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { MdOutlineWatchLater, MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { useUtils } from "../context/UtilsContext";

const Sidebar = () => {
  const { isSidebar, mobileShow, setMobileShow } = useUtils();

  const sidebarItems = [
    {
      groupName: "Home",
      groupItems: [
        { id: 1, name: "Home", icon: <GoHome /> },
        { id: 2, name: "Shorts", icon: <SiYoutubeshorts /> },
        { id: 3, name: "Subscriptions", icon: <MdOutlineSubscriptions /> },
      ],
    },
    {
      groupName: "You",
      groupItems: [
        { id: 1, name: "Your Channel", icon: <PiUserSquareThin /> },
        { id: 2, name: "History", icon: <MdHistory /> },
        { id: 3, name: "Playlists", icon: <MdOutlineSubscriptions /> },
        { id: 4, name: "Your Videos", icon: <BiVideo /> },
        { id: 5, name: "Watch later", icon: <MdOutlineWatchLater /> },
        { id: 6, name: "Liked videos", icon: <AiOutlineLike /> },
      ],
    },
    {
      groupName: "Explore",
      groupItems: [
        { id: 1, name: "Trending", icon: <SiTrendmicro /> },
        { id: 2, name: "Shopping", icon: <HiOutlineShoppingBag /> },
        { id: 3, name: "Music", icon: <SiYoutubemusic /> },
        { id: 4, name: "Films", icon: <PiFilmSlateLight /> },
        { id: 5, name: "Live", icon: <CgMediaLive /> },
        { id: 6, name: "Gaming", icon: <IoGameControllerOutline /> },
        { id: 7, name: "News", icon: <FaRegNewspaper /> },
        { id: 8, name: "Sport", icon: <TfiCup /> },
        { id: 9, name: "Courses", icon: <SiStylelint /> },
        { id: 10, name: "Fashion & beauty", icon: <PiLightbulbLight /> },
        { id: 11, name: "Podcasts", icon: <MdPodcasts /> },
      ],
    },
    {
      groupName: "More From YouTube",
      groupItems: [
        { id: 1, name: "YouTube Premium", icon: <FaYoutube /> },
        { id: 2, name: "YouTube Studio", icon: <SiYoutubestudio /> },
        { id: 3, name: "YouTube Music", icon: <SiYoutubemusic /> },
        { id: 4, name: "YouTube Kids", icon: <SiYoutubekids /> },
      ],
    },
  ];

  const ModelOverlay = () => (
    <div
      className="flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
      onClick={() => setMobileShow(!mobileShow)}
    ></div>
  );

  return (
    <>
      <div
        className={`${
          mobileShow
            ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]"
            : "hidden h-[calc(100vh-6.625rem)] w-[18%]"
        } xl:static xl:block px-2 lg:px-6 overflow-x-hidden scrollbar-thin`}
      >
        <div className="space-y-3 items-center">
          {sidebarItems.map((group) => (
            <div key={group.groupName} className="mb-5">
              <h1 className="font-bold">{group.groupName}</h1>
              {group.groupItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-6 hover:bg-gray-600 duration-300 rounded-xl p-1 my-3"
                >
                  <div className="text-sm cursor-pointer">{item.icon}</div>
                  <span className="text-sm cursor-pointer">{item.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <br />
        <hr />
        <div>
          <span className="text-xs text-gray-600 font-semibold">
            About Press Copyright <br /> Contact us Creators <br /> Advertise
            Developers <br />
            <p className="mt-3">Terms Privacy Policy & Safety</p> How YouTube
            works <br /> Test new features
          </span>
          <br />
          <p className="text-xs text-gray-500 mt-3">© 2024 Learn Coding</p>
        </div>
      </div>
      {mobileShow ? <ModelOverlay /> : null}
    </>
  );
};

export default Sidebar;
