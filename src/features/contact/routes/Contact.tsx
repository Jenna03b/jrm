import React from "react";
import { motion } from "framer-motion";
import godzinySvg from "../../../assets/godziny.svg";
import kontaktSvg from "../../../assets/kontakt.svg";
import obudowaPng from "../../../assets/obudowa.png";
import jrmBlackPng from "../../../assets/jrmBlack.png";

export const Contact = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        {/* Left Section - Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={obudowaPng} className="w-full max-w-lg" alt="Kontakt - Obudowy klimatyzacji" />
        </motion.div>

        {/* Right Section - Contact Info */}
        <motion.div
          className="lg:w-1/2 grid place-content-center py-10 lg:py-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Company Name */}
          <motion.div
            className="flex justify-center items-center my-4 pb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <img src={jrmBlackPng} className="w-12 lg:w-16 mr-4" alt="Kontakt - Obudowy klimatyzacji" />
            <h1 className="font-bold text-2xl lg:text-3xl">Obudowy Klimatyzacji</h1>
          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left">
            {/* Contact Details */}
            <motion.div
              className="mb-6 lg:mb-0 lg:mr-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center mb-1">
                <img src={kontaktSvg} className="w-6 mr-2" alt="Kontakt" />
                <h1 className="uppercase font-bold text-green-500 text-2xl lg:text-3xl">Kontakt</h1>
              </div>
              <div className="text-lg lg:text-xl font-semibold mt-2">
                <p>obudowyklimatyzacji@gmail.com</p>
                <p>+48 665 877 851</p>
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="flex items-center mb-1">
                <img src={godzinySvg} className="w-6 mr-2" alt="Godziny otwarcia" />
                <h1 className="uppercase font-bold text-green-500 text-2xl lg:text-3xl">Godziny otwarcia</h1>
              </div>
              <div className="text-lg lg:text-xl font-semibold mt-2">
                <p>Poniedziałek - Piątek: 7:00 - 16:00</p>
                <p>Sobota: 7:00 - 15:00</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
