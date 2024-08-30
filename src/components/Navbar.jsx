/* eslint-disable react-hooks/exhaustive-deps */
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from "../../public/logo.png";
import profile from "../../public/pic.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();
  const [searchBar, setSearchBar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isSidebar, mobileShow);
  }, [isSidebar]);

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleSidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    }
    setIsSidebar(!isSidebar);
  };

  if (searchBar) {
    return (
      <div className="flex fixed top-0 w-[100%] bg-white justify-between px-6 py-2">
        <IoMdArrowBack size={20} onClick={() => setSearchBar(!searchBar)}/>
        <div className="flex flex-grow  items-center mx-4">
          <div className="w-[100%] px-5 py-2 border border-gray-500 rounded-l-full ">
            <input
              type="text"
              placeholder="Search"
              className="outline-none "
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button
            className="px-4 py-2 border border-gray-500 rounded-r-full bg-gray-100"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <CiSearch size={"24px"} />
          </button>
          <IoMdMic
            size={"42px"}
            className="ml-3 border border-gray-600  rounded-full p-2  cursor-pointer hover:bg-gray-200 duration-200"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex fixed top-0 w-[100%] bg-white justify-between px-6 py-2 items-center">
      <div className="flex items-center space-x-4 cursor-pointer ">
        <AiOutlineMenu
          className="text-xl cursor-pointer"
          onClick={handleSidebar}
        />
        <img src={logo} className="w-28" />
      </div>
      <div className="hidden md:flex  w-[35%] items-center ">
        <div className="w-[100%] px-5 py-2 border border-gray-500 rounded-l-full ">
          <input
            type="text"
            placeholder="Search"
            className="outline-none "
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border border-gray-500 rounded-r-full bg-gray-100"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>

        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600  rounded-full p-2  cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="  flex space-x-5 items-center">
        <IoIosSearch
          className="text-2xl md:hidden"
          onClick={() => setSearchBar(!searchBar)}
        />
        <RiVideoAddFill className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <Avatar src={profile} size="32" round={true} />
      </div>
    </div>
  );
};

export default Navbar;
