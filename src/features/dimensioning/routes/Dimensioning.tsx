import React from "react";
import { motion } from "framer-motion";
import wymiaryPng from "../../../assets/wymiary.png";
import wycenaSvg from "../../../assets/wycena.svg";
import wymiarowanieSvg from "../../../assets/wymiarowanie.svg";

export const Dimensioning = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10">
      {/* Flexbox for layout - stacks on mobile */}
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Section (Image) */}
        <motion.div 
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={wymiaryPng} className="p-5 lg:p-20 w-full max-w-lg" alt="Wymiary" />
        </motion.div>

        {/* Right Section (Text) */}
        <motion.div 
          className="lg:w-1/2 pl-0 lg:pl-6 py-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="pr-6">
            <div className="flex items-center mb-5">
              <img src={wymiarowanieSvg} className="w-8 lg:w-10 mr-3" alt="Wymiarowanie" />
              <motion.div 
                className="font-bold text-2xl lg:text-3xl text-green-500 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Wymiarowanie
              </motion.div>
            </div>

            {/* Descriptions */}
            {[
              "Wymiarowanie należy przeprowadzić na zamontowanej jednostce zewnętrznej. Nie jest możliwe oszacowanie wymiarów obudowy dla jednostki niezamontowanej, ponieważ na wielkość budowy ma wpływ wiele czynników związanych z rodzajem montażu urządzenia, wyjściem przewodów itp.",
              "W celu poprawnego zwymiarowania obudowy należy zmierzyć: długość - pomiar od najbardziej wystających elementów urządzenia oraz należy dodać minimum 15cm. Wysokość - pomiar od powierzchni podłogi do najwyżej położonego punktu urządzenia oraz należy dodać minimum 5cm. Głębokość - pomiar od ściany do najdalej wystającego punktu którym zazwyczaj są stopy jednostki oraz należy dodać 5cm.",
              "W celu poprawnego zwymiarowania obudowy zachęcamy o przesłania zdjęć z przyłożoną miarą. W takiej sytuacji wspólnie razem z Państwem ustalimy prawidłowe wymiary oraz będziemy w stanie wychwycić ewentualne przeszkody montażowe."
            ].map((text, index) => (
              <motion.p 
                key={index} 
                className="mb-5 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                {text}
              </motion.p>
            ))}

          </div>

          {/* Order Button Section */}
          <motion.div 
            className="flex justify-end mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center bg-zinc-900 shadow-lg rounded-xl text-white h-full p-5">
              <p className="font-bold text-xl lg:text-2xl mx-5">Zamów już teraz:</p>
              <motion.button 
                className="flex justify-center items-center text-green-500 hover:bg-white text-lg lg:text-xl font-bold px-8 lg:px-16 py-3 rounded-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kontakt
                <img src={wycenaSvg} className="w-6 lg:w-8 ml-2" alt="Wycena" />
              </motion.button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};
