import React from "react";
import { Counter } from "./components/Counter";
import './index.scss'

const App: React.FC = () => {
  return (
    <div className="app">
        <Counter />
    </div>
  );
}; 

export default App;