import React from "react";
import { BiCheck, BiGlobe } from "react-icons/bi";
import { FaCheck, FaGlobe } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const LangOverlay = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { dark } = useSelector(state => state.mode)
  const mode = localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : dark
  const over = useSelector((state) => state.over.show);
  const lang = useSelector((state) => state.lang.arabic);
  const state = localStorage.getItem("lang")
    ? JSON.parse(localStorage.getItem("lang"))
    : lang;
  const dispatch = useDispatch();
  const hidelangover = () => {
    dispatch({ type: "HIDE" });
  };
  const changetoEnglish = () => {
    localStorage.setItem("lang", "false");
    window.location.reload();
    window.location =
      "https://shathaquran.com/#" + pathname;

    setTimeout(() => {
      dispatch({ type: "ENGLISH" });
    }, 100);
  };
  const changetoAranbic = () => {
    localStorage.setItem("lang", "true");
    window.location.reload();
    window.location =
      "https://shathaquran.com/#" + pathname;
    setTimeout(() => {
      dispatch({ type: "ARABIC" });
    }, 100);
  };
  return (
    <div
      onClick={() => hidelangover()}
      style={{ zIndex: "100000", background: "rgba(0,0,0,0.7)" }}
      className={` select-none 
                        outer-overlay fixed top-0 left-0 right-0  h-[100vh]  flex justify-center items-center
                        w-full  bottom-0  ${over ? "show" : ""
        }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`p-3 pt-5 flex  flex-col rounded justify-between inner-overlay shadow-md shadow-black
                           w-[280px] h-[135px]  ${mode ? "bg-lighter" : 'bg-white'}`}
      >
        <h2 className=" text-primary flex items-center
         gap-1 justify-center relative text-center font-bold capitalize text-[25px]">
          {!state ? "change Language" : "تغيير اللغة"}

          <BiGlobe className=" text-[18px] absolute top-[-10px] left-[-5px]" />
        </h2>
        <div className="flex gap-2 items-center">
          <span
            style={{ fontFamily: "El Messiri" }}
            onClick={() => changetoAranbic()}
            className={`text-center text-[18px] flex gap-2   justify-center
                                  hover:text-white   cursor-pointer  
                                ${state ? ' hidden' : ''}  rounded
                                ${mode ? 'text-gray-300 hover:bg-slate-500 bg-graymy shadow-md shadow-black' : 'bg-light shadow shadow-gray-500 hover:bg-blue-500'} p-3 flex-1`}
          >
            اللغة العربية
            <BiCheck className=" text-[25px]" />
          </span>
          <span
            style={{ fontFamily: "Ubuntu" }}
            onClick={() => changetoEnglish()}
            className={`text-center  text-[18px]  
                                ${state ? ' ' : 'hidden'} rounded
                                ${mode ? 'text-gray-300 hover:bg-slate-500 bg-graymy shadow-md shadow-black' : 'shadow shadow-gray-500 bg-light hover:bg-blue-500'} p-3  flex-1
                              hover:text-white  cursor-pointer flex gap-1 justify-center items-center
                                `}
          >
            English
            <BiCheck className=" text-[25px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default LangOverlay;
