import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const App = () => (
  <>
    React
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
);

const Home = () => <>Home page</>;
