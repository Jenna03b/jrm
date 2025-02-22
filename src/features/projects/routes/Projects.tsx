import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import model1Png from "../../../assets/models/model1.png";
import model2Png from "../../../assets/models/model2.png";
import model3Png from "../../../assets/models/model3.png";
import model4Png from "../../../assets/models/model4.png";
import model5Png from "../../../assets/models/model5.png";
import model6Png from "../../../assets/models/model6.png";
import model7Png from "../../../assets/models/model7.png";
import projektSvg from "../../../assets/home/projekt.svg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  model1Png,
  model2Png,
  model3Png,
  model4Png,
  model5Png,
  model6Png,
  model7Png,
];

export const Projects: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection("left");
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection("right");
    setSelectedIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev(e as any);
      if (e.key === "ArrowRight") handleNext(e as any);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="flex items-center m-10">
        <img src={projektSvg} className="w-14 mr-2" alt="Projekt" />
        <div className="font-bold text-3xl text-green-500 uppercase">
          Przykładowe realizacje
        </div>
      </div>

      {/* Gallery Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() => handleOpen(index)}
          >
            <img src={src} alt={`Obudowa Kostka ${index + 1}`} className="w-full rounded-lg shadow-md" />
          </motion.div>
        ))}
      </div>

      {/* Modal with Animations */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <div className="relative p-5">
              {/* Close Button */}
              <motion.button
                className="absolute top-2 right-2 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-700"
                onClick={handleClose}
                whileHover={{ scale: 1.1 }}
              >
                <X size={24} />
              </motion.button>

              {/* Image with Slide Animation */}
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex]}
                alt={`Obudowa Kostka ${selectedIndex + 1}`}
                className="max-w-full max-h-screen rounded-lg shadow-lg"
                initial={{ x: direction === "right" ? 100 : -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === "right" ? -100 : 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Navigation Buttons */}
              <motion.button
                className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-3 hover:bg-gray-700"
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
              >
                <ChevronLeft size={30} />
              </motion.button>

              <motion.button
                className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-3 hover:bg-gray-700"
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
              >
                <ChevronRight size={30} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
