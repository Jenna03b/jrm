import React from "react";
import { motion } from "framer-motion";
import imgHome1 from "../../../assets/home/imgHome1.png";
import imgHome2 from "../../../assets/home/home2.png";
import imgHome3 from "../../../assets/home/home4.png";
import wymiarowanieSvg from "../../../assets/home/wymiarowanie.svg";
import projektSvg from "../../../assets/home/projekt.svg";
import realizacjaSvg from "../../../assets/home/realizacja.svg";
import naszeObudowySvg from "../../../assets/home/naszeObudowy.svg";
import homeSvg from "../../../assets/home/home.svg";
import wycenaSvg from "../../../assets/wycena.svg";

export const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.div
        className="w-full bg-black text-white font-bold flex flex-col md:flex-row items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2 flex flex-col items-center text-center md:text-left px-8 py-12">
          <img src={homeSvg} className="w-20 mb-4" alt="Obudowy Klimatyzacji" />
          <p className="text-xl">
            Klimatyzator nie zawsze wygląda estetycznie, często zaburza nowoczesny wygląd otoczenia.
            Oferujemy obudowy jednostek zewnętrznych klimatyzacji – zarówno standardowe, jak i na wymiar.
          </p>
          <motion.button
            className="mt-6 flex items-center text-green-500 bg-zinc-700 hover:bg-white px-10 py-3 rounded-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            Kontakt <img src={wycenaSvg} className="w-8 ml-2" alt="Wycena" />
          </motion.button>
        </div>
        <img src={imgHome1} className="md:w-1/2 w-full rounded-l-xl" alt="Obudowy Klimatyzacji" />
      </motion.div>

      {/* Process Steps */}
      <div className="w-full bg-black text-white flex flex-wrap justify-center py-6">
        {[
          { img: wymiarowanieSvg, title: "Wymiarowanie", text: "Zwymiarujemy obudowę na podstawie zdjęć." },
          { img: projektSvg, title: "Projekt", text: "Przygotujemy propozycję obudowy." },
          { img: realizacjaSvg, title: "Szybka realizacja", text: "Realizacja w 14 dni po akceptacji." },
        ].map((step, index) => (
          <motion.div
            key={index}
            className="flex bg-zinc-700 m-2 p-6 rounded-xl w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={step.img} className="w-20 mr-3" alt={step.title} />
            <div>
              <p className="font-bold text-2xl">{step.title}</p>
              <p className="text-lg">{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Obudowy Section */}
      <div className="m-10">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={naszeObudowySvg} className="w-12 mr-2" alt="Nasze Obudowy" />
          <p className="font-bold text-3xl">Nasze Obudowy</p>
        </motion.div>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {[
            {
              img: imgHome2,
              title: "Konstrukcja Obudowy",
              text: "Wykonana z profili aluminiowych lakierowanych proszkowo – trwała, estetyczna i łatwa w montażu.",
              reverse: false,
            },
            {
              img: imgHome3,
              title: "Dostawa",
              text: "Dostawa na terenie całego kraju – gotowy produkt lub do samodzielnego montażu.",
              reverse: true,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${
                feature.reverse ? "md:flex-row-reverse" : ""
              } items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={feature.img} className="w-full md:w-1/3 rounded-xl shadow-md" alt={feature.title} />
              <div className="bg-zinc-200 shadow-lg p-6 md:w-2/3">
                <p className="font-bold text-2xl text-green-500">{feature.title}</p>
                <p className="text-lg">{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="flex justify-center my-8"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center bg-zinc-900 text-white shadow-lg rounded-xl p-5 w-full md:w-1/2">
          <p className="font-bold text-2xl mx-5">Zamów już teraz:</p>
          <motion.button
            className="flex items-center text-green-500 bg-zinc-700 hover:bg-white text-xl font-bold px-10 py-3 rounded-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            Kontakt <img src={wycenaSvg} className="w-8 ml-2" alt="Obudowy Klimatyzacji" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
