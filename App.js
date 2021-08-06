import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Routes from "./src/pages/Routes";

export default function App() {
  return (
    <>
      <StatusBar animated={true} backgroundColor="rgb(0,0,0)"/>
      <Routes />
    </>
  );
}
