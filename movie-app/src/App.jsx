import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar";

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to Movie App</h1>
      </div>
    </>
  );
}

export default App;


