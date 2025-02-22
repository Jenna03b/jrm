import React from "react";
import { motion } from "framer-motion";
import model1Png from "../../../assets/models/model1.png";
import model2Png from "../../../assets/models/model2.png";
import model3Png from "../../../assets/models/model3.png";
import model4Png from "../../../assets/models/model4.png";
import model5Png from "../../../assets/models/model5.png";
import model6Png from "../../../assets/models/model6.png";
import model7Png from "../../../assets/models/model7.png";
import wycenaSvg from "../../../assets/wycena.svg";
import kostkaSvg from "../../../assets/models/kostka.svg";

export const Models = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10">
      {/* Model Sections */}
      <div className="flex flex-col lg:flex-row">
        {/* Model Details */}
        <div className="lg:w-3/5 space-y-12">
          {/* Kostka Section */}
          <div>
            <div className="flex items-center text-2xl lg:text-3xl font-bold text-green-500 uppercase mb-4">
              <img src={kostkaSvg} className="w-10 mr-2" alt="Obudowa Kostka" />
              <p>Kostka</p>
            </div>
            <div className="bg-zinc-200 shadow-lg rounded-xl p-6 lg:p-10 text-lg">
              <p className="mb-4">
                Stabilną konstrukcję oraz estetyczny wygląd obudowy zapewnia
                szkielet oparty na profilach aluminiowych lakierowanych proszkowo
                połączonych łącznikami tworzywowymi. Do wypełnień bocznych
                zastosowano wysokiej jakości płyty kompozytowe typu dibond z
                wyfrezowanymi na CNC otworami wentylacyjnymi.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold">Wymiary:</p>
                  <p>- Standardowy 100x70x50cm</p>
                  <p>- Na zamówienie dowolny wymiar</p>
                </div>
                <div>
                  <p className="font-semibold">Warianty:</p>
                  <p>- Stojąca</p>
                  <p>- Wisząca</p>
                </div>
                <div>
                  <p className="font-semibold">Dostępne kolory:</p>
                  <p>- Szary antracyt (RAL 7016)</p>
                  <p>- Biały</p>
                  <p>- Czarny</p>
                </div>
                <div>
                  <p className="font-semibold">Transport:</p>
                  <p>- Produkt gotowy na palecie</p>
                  <p>- Produkt do poskładania w zestawie z instrukcją</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lamelowa Section */}
          <div>
            <div className="flex items-center text-2xl lg:text-3xl font-bold text-green-500 uppercase mb-4">
              <img src={kostkaSvg} className="w-10 mr-2" alt="Obudowa Kostka" />
              <p>Lamelowa</p>
            </div>
            <div className="bg-zinc-200 shadow-lg rounded-xl p-6 lg:p-10 text-lg">
              <p className="mb-4">
                Stabilną konstrukcję oraz estetyczny wygląd obudowy zapewnia
                szkielet oparty na profilach aluminiowych lakierowanych proszkowo
                połączonych łącznikami tworzywowymi. Lamele wykonane są z profili
                aluminiowych wzmocnionych od wewnątrz tworzywem sztucznym.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold">Wymiary:</p>
                  <p>- S: 100x70x50cm</p>
                  <p>- Na zamówienie dowolny wymiar</p>
                </div>
                <div>
                  <p className="font-semibold">Dostępne kolory:</p>
                  <p>- Szary antracyt (RAL 7016)</p>
                  <p>- Biały</p>
                </div>
                <div>
                  <p className="font-semibold">Warianty:</p>
                  <p>- Stojąca</p>
                </div>
                <div>
                  <p className="font-semibold">Transport:</p>
                  <p>- Produkt gotowy na palecie</p>
                  <p>- Produkt do poskładania w zestawie z instrukcją</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Model Images */}
        <div className="lg:w-2/5 grid grid-cols-2 gap-4 mt-8 lg:mt-0">
          {[model1Png, model2Png, model3Png, model4Png, model5Png, model6Png, model7Png].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={src}
                alt="Obudowa Kostka"
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Order Section */}
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
