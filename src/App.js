import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Skills from './components/Skills';
import ProfileImage from './assets/images/2018bday.jpeg';
import Experience from './components/Experience';
import Projects from './Projects'
import Needl from './assets/images/xp/needl.jpeg'
import Experiences from './Experiences'
import Achievements from './Achievements'
function App() {
  return (
    <div className="App p-20 bg-gray-100">
      <div className='flex flex-col m-10 items-center gap-4 '>
        <Profile img={ProfileImage}/>
      <div className='flex flex-row justify-between w-full gap-4'>
        <div className='flex flex-col items-center w-2/5'>
            <div className='card m-2'>
                <Skills title='Frontend' skills={['ReactJS', 'Redux', 'NodeJS', 'Tailwind', 'NextJS', 'styled-components', 'MaterialUI']}/>
            </div>
            <div className='card m-2'>
                <Skills title='Frontend' skills={['ReactJS', 'Redux', 'NodeJS', 'Tailwind', 'NextJS', 'styled-components', 'MaterialUI']}/>
            </div>
            <Achievements/>
        </div>
        <div className='flex flex-col items-center w-full gap-4'>
          <Experiences/>
          <div className=''>  <Projects/> </div>
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default App;

// Make all components auto resizable based on where they are draged to!!