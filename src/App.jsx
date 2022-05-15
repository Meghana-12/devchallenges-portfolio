import React from 'react'
import './App.css';
import Profile from './Profile';
import Skills from './Skills';
import ProfileImage from './assets/images/2018bday.jpeg';
import Projects from './Projects'
import Experiences from './Experiences'
import Achievements from './Achievements'
import Blogs from './Blogs'
import Music from './Music'

function App() {
  const [isDark, setIsDark] = React.useState(false);
  return (
    <div className={isDark ? 'dark' : ''}> 
    <div className="App pl-20 pr-20 pt-10 pb-10 bg-gray-100 dark:bg-slate-900 gap-4">
      {/* add dark theme and multiple layout with animation */}
      <div className='flex flex-col m-10 items-center gap-4'>
      <button className='btn self-end' onClick={()=> setIsDark(value => !value)}>Switch to {isDark ?  'Light' : 'Dark' } Mode!</button>
        <Profile img={ProfileImage}/>
      <div className='flex flex-row justify-between w-full gap-4'>
        <div className='flex flex-col items-center md:w-2/5 w-full gap-4 '>
            <Skills/>
            <Achievements/>
            <Blogs/>
            {/* <Music/> */}
        </div>
        <div className='flex flex-col items-center md:w-3/5 w-full gap-4  m-2 '>
          <Experiences/>
           <Projects/> 
        </div>
      </div>
      
      </div>
    </div>
    </div>
  );
}

export default App;

// Make all components auto resizable based on where they are draged to!!