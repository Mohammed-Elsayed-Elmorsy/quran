import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const LangOverlay = () => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);

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
      "https://mohammed-elsayed-elmorsy.github.io/learnquran/#" + pathname;

    setTimeout(() => {
      dispatch({ type: "ENGLISH" });
    }, 100);
  };
  const changetoAranbic = () => {
    localStorage.setItem("lang", "true");
    window.location.reload();
    window.location =
      "https://mohammed-elsayed-elmorsy.github.io/learnquran/#" + pathname;
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
                        w-full z-50 bottom-0 bg-blue-400  ${over ? "show" : ""
        }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-2 pt-5 flex flex-col justify-between inner-overlay rounded-md
                           w-[300px] h-[130px]  bg-white"
      >
        <h2 className=" text-primary text-center font-bold capitalize text-[25px]">
          {!state ? "Choose Language" : "اختر لغة"}
        </h2>
        <div className="flex gap-2 items-center">
          <span
            style={{ fontFamily: "El Messiri" }}
            onClick={() => changetoAranbic()}
            className="text-center text-[18px]
                                 hover:bg-blue-500 hover:text-white rounded-md  cursor-pointer block bg-light p-3 flex-1"
          >
            اللغة العربية
          </span>
          <span
            style={{ fontFamily: "Ubuntu" }}
            onClick={() => changetoEnglish()}
            className="text-center  text-[18px]
                                hover:bg-blue-500 hover:text-white rounded-md cursor-pointer block bg-light p-3  flex-1"
          >
            English
          </span>
        </div>
      </div>
    </div>
  );
};

export default LangOverlay;
