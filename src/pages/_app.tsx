import React from 'react';
import { AppProps } from 'next/app';

import { NavProvider } from '../context/navContext';

import NavBar from '../components/NavBar';

import '../styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NavProvider>
      <NavBar />
      <Component {...pageProps} />
    </NavProvider>
  );
};

export default App;
