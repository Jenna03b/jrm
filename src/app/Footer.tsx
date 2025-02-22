import React from "react";
import logoImg from "../assets/jrm.png";
import { Link } from "react-router-dom";
import godzinySvg from "../assets/godziny.svg";
import kontaktSvg from "../assets/kontakt.svg";

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white text-xs md:text-lg font-sans">
      <div className="container mx-auto px-4 lg:px-10 py-10">
        {/* Logo & Title */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left mb-8">
          <Link to="/">
            <img src={logoImg} className="w-32 h-auto mx-auto md:mx-0" alt="JRM - Obudowy Klimatyzacji" />
          </Link>
          <h1 className="uppercase font-bold text-lg md:text-2xl mt-4 md:mt-0 md:ml-4">Obudowy Klimatyzacji</h1>
        </div>

        {/* Contact & Opening Hours */}
        <div className="flex flex-col md:flex-row justify-evenly items-center text-center md:text-left space-y-6 md:space-y-0">
          {/* Opening Hours */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <img src={godzinySvg} className="w-6 mr-2" alt="Godziny otwarcia" />
              <h1 className="uppercase font-bold text-green-500">Godziny otwarcia</h1>
            </div>
            <p>Poniedziałek - Piątek: 7:00 - 16:00</p>
            <p>Sobota: 7:00 - 15:00</p>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <img src={kontaktSvg} className="w-6 mr-2" alt="Kontakt" />
              <h1 className="uppercase font-bold text-green-500">Kontakt</h1>
            </div>
            <p>obudowyklimatyzacji@gmail.com</p>
            <p>+48 665 877 851</p>
          </div>

          {/* Privacy Policy */}
          <div className="text-center md:text-left">
            <Link to="/polityka-prywatnosci" className="text-green-400 hover:underline">
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
