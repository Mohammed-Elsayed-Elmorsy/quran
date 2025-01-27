import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const ModeOverlay = () => {
    const location = useLocation();
    const pathname = location.pathname;
    console.log(pathname);

    const lang = useSelector((state) => state.lang.arabic);
    const over = useSelector((state) => state.modeOver.show);
    const { dark } = useSelector((state) => state.mode);
    const state = localStorage.getItem("lang")
        ? JSON.parse(localStorage.getItem("lang"))
        : lang;
    const dispatch = useDispatch();
    const hideModeover = () => {
        dispatch({ type: "HIDE" });
    };
    const changetoDark = () => {
        localStorage.setItem("dark", "true");
        window.location.reload();
        window.location =
            "https://mohammed-elsayed-elmorsy.github.io/learnquran/#" + pathname;
        setTimeout(() => {
            dispatch({ type: "DARK" });
        }, 100);
    };
    const changetoLight = () => {
        localStorage.setItem("dark", "false");
        window.location.reload();
        window.location =
            "https://mohammed-elsayed-elmorsy.github.io/learnquran/#" + pathname;
        setTimeout(() => {
            dispatch({ type: "LIGHT" });
        }, 100);
    };
    return (
        <div
            onClick={() => hideModeover()}
            style={{ zIndex: "100000", background: "rgba(0,0,0,0.7)" }}
            className={` select-none
                        outer-overlay fixed top-0 left-0 right-0  h-[100vh]  flex justify-center items-center
                        w-full z-50 bottom-0 bg-blue-400  ${over ? "show" : ""
                }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="p-3 pt-5 flex flex-col justify-between inner-overlay 
                           w-[300px] h-[140px]  bg-white"
            >
                <h2
                    style={!state ? { fontFamily: "Ubuntu" } : { fontFamily: "El Messiri" }}
                    className=" text-primary text-center font-bold capitalize text-[25px]">
                    {!state ? "choose mode" : " اختر المظهر"}
                </h2>
                <div className="flex gap-3 items-center">
                    <span
                        style={!state ? { fontFamily: "Ubuntu" } : { fontFamily: "El Messiri" }}
                        onClick={() => changetoDark()}
                        className="text-center text-[18px]
                                 hover:bg-blue-500 hover:text-white  cursor-pointer block bg-light p-3 flex-1"
                    >
                        {!state ? "dark mode" : "الوضع الداكن"}
                    </span>
                    <span
                        style={!state ? { fontFamily: "Ubuntu" } : { fontFamily: "El Messiri" }}
                        onClick={() => changetoLight()}
                        className="text-center  text-[18px]
                                hover:bg-blue-500 hover:text-white cursor-pointer block bg-light p-3  flex-1"
                    >
                        {!state ? "light mode" : "الوضع الفاتح"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ModeOverlay;
