import React, { useState } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import logoImg from '../assets/jrm.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import clsx from 'clsx';
import { Footer } from './Footer.tsx';

export const MainLayout = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const location = useLocation();
    const getLinkClass = (path: string) => {
      return location.pathname === path ? 'text-green-500' : 'hover:text-green-500';
    };

  return (
    <div className="h-screen w-auto mx-0 flex overflow-hidden">
      <div className="relative flex flex-col w-0 flex-1 overflow-hidden">
        <div className="flex justify-between text-white items-center w-full h-24 px-8 bg-black">
            <div className="flex items-center">
              <Link to="/">
                <img src={logoImg} className="w-fit h-fit" alt="JRM - Obudowy Klimatyzacji"></img>
              </Link>
              <h1 className='text-white text-3xl font-bold capitalize pl-8'>obudowy Klimatyzacji</h1>
            </div>

            <div className="z-40 flex">
              <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white relative">
                  <div
                    className={`transition-transform duration-300 ease-in-out ${
                      isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                    }`}
                  >
                    <FaBars size={24} />
                  </div>
                  <div
                    className={`transition-transform duration-300 ease-in-out absolute top-0 left-0 ${
                      isOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                    }`}
                  >
                    <FaTimes size={24} />
                  </div>
                </button>
              </div>

              <div className="hidden lg:flex text-white xl:text-base 2xl:text-lg text-center">
                <Link to="/" className={`px-3 py-2 uppercase ${getLinkClass('/')}`}>Strona główna</Link>
                <Link to="/models" className={`px-3 py-2 uppercase ${getLinkClass('/models')}`}>modele</Link>
                <Link to="/dimensioning" className={`px-3 py-2 uppercase ${getLinkClass('/dimensioning')}`}>wymiarowanie</Link>
                <Link to="/projects" className={`px-3 py-2 uppercase ${getLinkClass('/projects')}`}>realizacje</Link>
                <Link to="/contact" className={`px-3 py-2 uppercase ${getLinkClass('/contact')}`}>kontakt</Link>
              </div>
            </div>

          {/* Mobile menu */}
          <div
            className={clsx(
              'fixed w-screen bg-black pb-5 transition-top duration-300 drop-shadow-md lg:hidden z-30 pt-8',
              {
                '-top-[800px] opacity-0': !isOpen,
                'top-24 opacity-100': isOpen,
              }
            )}
          >
            <div className="flex flex-col items-center text-gray-400 pr-10">
              <Link to="/" className={`px-3 py-2 uppercase ${getLinkClass('/')}`}>
              Strona główna
              </Link>
              <Link to="/" className={`px-3 py-2 uppercase ${getLinkClass('/')}`}>
              modele
              </Link>
              <Link to="/" className={`px-3 py-2 uppercase ${getLinkClass('/')}`}>
              wymiarowanie
              </Link>
              <Link to="/" className={`px-3 py-2 uppercase ${getLinkClass('/')}`}>
              realizacje
              </Link>
              <Link to="/" className={`px-3 py-2 uppercase ${getLinkClass('/')}`}>
              kontakt
              </Link>
            </div>
          </div>
        </div>
        <main
          className="flex flex-1 flex-col relative overflow-y-auto focus:outline-none"
        >
            <Outlet />
            <Footer />
        </main>
      </div>
    </div>
  );
};


