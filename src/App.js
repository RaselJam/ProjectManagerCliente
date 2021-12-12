import { useEffect, useState } from 'react'

import Login from './Components/Auth/Login/Login';
import Signup from './Components/Auth/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Sidebar from './Components/Sidebar/Sidebar';
import css from './index.module.css'
const mockUser = { userName: "userTest", img: "https://i.pinimg.com/736x/3a/59/42/3a59424288c02e82234909d6404260b2--character-designer-digital-art.jpg" }




function App() {

  return (
    <div className={css.appContainer}>
      <Navbar user={mockUser} />
      <div className={css.appContent}>
        <Sidebar />
        <Projects />

      </div>

    </div>
  );
}

export default App;
