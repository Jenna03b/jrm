
import React from 'react';
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import { MainLayout } from "./MainLayout.tsx";
import { Home } from '../features/home/routes/Home.tsx';
import { Models } from '../features/models/routes/Models.tsx';
import { Dimensioning } from '../features/dimensioning/routes/Dimensioning.tsx';
import { Projects } from '../features/projects/routes/Projects.tsx';
import { Contact } from '../features/contact/routes/Contact.tsx';
import { AnimatePresence, motion } from 'framer-motion';

const publicRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'models',
        element: <Models />,
      },
      {
        path: 'dimensioning',
        element: <Dimensioning />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];

export const AppRoutes = () => {
  const element = useRoutes(publicRoutes);
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {element}
      </motion.div>
    </AnimatePresence>
  );
};
