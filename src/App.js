import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';



function App() {
  return (
    <div className="app">
       {/* side bar */}
      <Sidebar />


       {/* /feed */}
      <Feed />
      
      {/* Widgets */}

      <Widgets />
    </div>
  );
}

export default App;
