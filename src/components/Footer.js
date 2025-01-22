import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { links, linksarabic } from "../utils/data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiEnvelope, GiGlobe, GiPhone } from "react-icons/gi";

const Footer = () => {
  const lang = useSelector((state) => state.lang.arabic);
  const state = localStorage.getItem("lang")
    ? JSON.parse(localStorage.getItem("lang"))
    : lang;
  return (
    <div className=" footer py-[40px]">
      <footer className=" container mx-auto px-6 md:px-[70px] lg:px-[120px]">
        <div className="footer-container md:justify-between  flex-wrap  flex gap-2 ">
          <div className="footer-div courses flex flex-col ">
            {state ? (
              <h4 className=" text-[20px]">دوراتنا التعليمية</h4>
            ) : (
              <h4 className=" text-[20px]">Our Courses</h4>
            )}
            {state ? (
              <div className=" text-slate-200 capitalize flex flex-col gap-1">
                <Link to="/programms/4"> التجويد</Link>
                <Link to="/programms/3">حفظ القرآن</Link>
                <Link to="/programms/2">الدراسات الاسلامية</Link>
                <Link to="/programms/1">مهارات القراءة</Link>
                <Link to="/programms/5">العربية الفصحى</Link>
                <Link to="/programms/6"> تعلم العربية</Link>
              </div>
            ) : (
              <div className=" text-slate-200 capitalize flex flex-col gap-1">
                <Link to="/programms/4">Arabic courses</Link>
                <Link to="/programms/2">memorization</Link>
                <Link to="/programms/3">tagweed</Link>
                <Link to="/programms/1">Reading skills</Link>
                <Link to="/programms/6">Islamic Studies</Link>
                <Link to="/programms/5">learn Arabic</Link>
              </div>
            )}
          </div>

          <div className=" footer-div text-slate-200 flex flex-col">
            {state ? (
              <h4 className=" text-[20px]"> الروابط السريعة</h4>
            ) : (
              <h4 className=" text-[20px]">Quick links</h4>
            )}
            <div className="flex flex-col gap-1">
              {!state
                ? links.map((link) => (
                    <Link
                      key={link.id}
                      className={` capitalize`}
                      to={link.to === "/" ? "/" : "/" + link.to}
                    >
                      {link.to === "/" ? "home" : link.to}
                    </Link>
                  ))
                : linksarabic.map((link) => (
                    <Link
                      key={link.id}
                      className={` capitalize`}
                      to={link.to === "/" ? "/" : "/" + link.to}
                    >
                      {link.text === "/" ? "home" : link.text}
                    </Link>
                  ))}
            </div>
          </div>

          <div className="contact  text-slate-200 footer-div flex flex-col gap-1">
            {state ? (
              <h4 className=" text-[20px]"> تواصل معنا</h4>
            ) : (
              <h4 className=" text-[20px]">Contact Us</h4>
            )}
            <a className=" flex items-center gap-1" href="#v">
              <span className=" font-bold text-[22px]">
                <GiPhone />
              </span>
              <span className="" href="tel:+1234567890">
                +2 010 1386 4939
              </span>
            </a>
            <a className=" flex items-center gap-1" href="#v">
              <span className=" font-bold text-[22px]">
                <GiEnvelope />
              </span>
              <span className="" href="mailto:shathaquran.academy@gmail.com">
                shathaquran.academy
              </span>
            </a>
            <p className=" flex items-center gap-1">
              <span className=" font-bold text-[22px]">
                <GiGlobe />
              </span>
              {!state ? "Cairo , Eygpt" : "القاهرة , مصر"}
            </p>
            <a
              className=" flex items-center gap-1"
              href="https://wa.me/201013864939"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className=" font-bold text-[22px]">
                <FaWhatsapp />
              </span>
              +2 010 1386 4939
            </a>
            <a
              className=" flex items-center gap-1"
              href="https://t.me/shatha_alquran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram className="font-bold text-[22px]" />{" "}
              {!state ? <span>Telegram</span> : <span> تليجرام</span>}
            </a>
          </div>

          <div className=" footer-div text-slate-200   flex flex-col">
            {state ? (
              <h4 className=" text-[21px]"> تابعنا الان</h4>
            ) : (
              <h4 className=" text-[21px]"> Follow us</h4>
            )}
            {state ? (
              <div className=" flex-1 flex flex-col gap-1">
                <a
                  className=" flex items-center gap-1"
                  href="https://www.facebook.com/share/1EiyVKbBTt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook /> <span>فيسبوك</span>
                </a>
                <a
                  className=" flex items-center gap-1"
                  href="https://youtube.com/@shathaalquran?si=NyM9EfrFyzhPcQch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube /> <span>اليوتيوب</span>
                </a>
                <a
                  className=" flex items-center gap-1"
                  href="https://t.me/shatha_alquran"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram /> <span>تليجرام</span>
                </a>
                <a
                  className=" flex items-center gap-1"
                  href="https://www.instagram.com/shatha.alquran?igsh=MWg3OWc5Y3NtMzcwNA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram /> <span>انستقرام</span>
                </a>
              </div>
            ) : (
              <div className=" flex-1 flex flex-col gap-1">
                <a
                  className=" flex items-center gap-1"
                  href="https://www.facebook.com/share/1EiyVKbBTt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook /> <span>Facebook</span>
                </a>
                <a
                  className=" flex items-center gap-1"
                  href="https://youtube.com/@shathaalquran?si=NyM9EfrFyzhPcQch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube /> <span>Youtube</span>
                </a>
                <a
                  className=" flex items-center gap-1"
                  href="https://t.me/shatha_alquran"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram /> <span>Telegram</span>
                </a>
                <a
                  className=" flex items-center gap-1"
                  href="https://www.instagram.com/shatha.alquran?igsh=MWg3OWc5Y3NtMzcwNA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram /> <span>Instagram</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
