import React from "react";
import { BiCheck } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { GiGears, GiGearStickPattern } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const ModeOverlay = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const { dark } = useSelector(state => state.mode)
    const mode = localStorage.getItem('dark') ?
        JSON.parse(localStorage.getItem('dark'))
        :
        dark
    const lang = useSelector((state) => state.lang.arabic);
    const over = useSelector((state) => state.modeOver.show);
    const state = localStorage.getItem("lang")
        ? JSON.parse(localStorage.getItem("lang"))
        : lang;
    const dispatch = useDispatch();
    const hideModeover = () => {
        dispatch({ type: "HIDE" });
    };
    const changetoDark = (e) => {
        console.log(e.target.value);

        localStorage.setItem("dark", "true");
        window.location.reload();
        window.location =
            "https://shathaquran.com/#" + pathname;
        setTimeout(() => {
            dispatch({ type: "DARK" });
        }, 100);
    };
    const changetoLight = (e) => {
        console.log(e.target);

        localStorage.setItem("dark", "false");
        window.location.reload();
        window.location =
            "https://shathaquran.com/#" + pathname;
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
                        w-full bottom-0  ${over ? "show" : ""
                }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`p-3 pt-5 flex flex-col rounded justify-between inner-overlay  shadow-md shadow-black
                    w-[300px] h-[130px]  ${mode ? "bg-graymy " : 'bg-white'}`}
            >
                <h2
                    style={!state ? { fontFamily: "Ubuntu" } : { fontFamily: "El Messiri" }}
                    className=" text-primary text-center relative font-bold capitalize text-[25px]">
                    {!state ? "change mode" : " اختر المظهر"}
                    <GiGears className=" text-[20px] absolute top-[-10px] left-[-5px]" />
                </h2>
                <div className="flex gap-3 items-center">
                    <span
                        style={!state ? { fontFamily: "Ubuntu" } : { fontFamily: "El Messiri" }}
                        onClick={(e) => changetoDark(e)}
                        className={`text-center  text-[17px] flex items-center gap-1 justify-center
                              cursor-pointer    rounded
                              ${mode ? 'text-gray-300 shadow-md shadow-black bg-lighter hover:bg-slate-500 hidden' : 'hover:bg-blue-500 shadow shadow-gray-500 hover:text-white bg-light'} p-3  flex-1`}
                    >
                        {!state ? "Dark Mode" : "المظهر الداكن"}
                        <BiCheck className=" text-[25px]" />
                    </span>
                    <span
                        style={!state ? { fontFamily: "Ubuntu" } : { fontFamily: "El Messiri" }}
                        onClick={(e) => changetoLight(e)}
                        className={`text-center  text-[18px] rounded
                            hover:bg-blue-500  cursor-pointer flex items-center gap-1 justify-center 
                            ${mode ? 'text-gray-300 hover:bg-slate-500 bg-lighter shadow-md shadow-black' : 'shadow bg-light shadow-gray-500 hidden'} p-3  flex-1`}
                    >
                        {!state ? "Light Mode" : "المظهر الفاتح"}
                        <BiCheck className=" text-[25px]" />

                    </span>
                </div>
            </div>
        </div>
    );
};

export default ModeOverlay;
