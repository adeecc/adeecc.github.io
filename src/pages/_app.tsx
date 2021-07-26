import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import NavBar from '../components/NavBar';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
};

export default App;
