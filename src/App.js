import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Skills from './components/Skills';
import Project from './components/Project';
import ProfileImage from './assets/images/2018bday.jpeg';
import Experience from './components/Experience';
import Projects from './Projects'
function App() {
  return (
    <div className="App  p-10 bg-gray-100">
      <div className="flex flex-row justify-around">
      <div className='flex flex-col m-2'>
        <Profile img={ProfileImage}/>
      </div>
      <div className='flex flex-col pl-4 m-2'>
        <div className='flex flex-row'>
            <div className='card m-2'>
                <Skills title='Frontend' skills={['ReactJS', 'Redux', 'NodeJS', 'Tailwind', 'NextJS', 'styled-components', 'MaterialUI']}/>
            </div>
            <div className='card m-2'>
                <Skills title='Frontend' skills={['ReactJS', 'Redux', 'NodeJS', 'Tailwind', 'NextJS', 'styled-components', 'MaterialUI']}/>
            </div>
        </div>
        <div>
          <div className='card m-2'>
          <Experience img={ProfileImage} role='Front-end developer' xp='Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.' company='Adidas' duration='Feb 2017 - Current' />
          <Experience img={ProfileImage} role='Front-end developer' xp='Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.' company='Adidas' duration='Feb 2017 - Current' />
          <Experience img={ProfileImage} role='Front-end developer' xp='Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.' company='Adidas' duration='Feb 2017 - Current' />

          </div>
        </div>
      </div>
      </div>
      <Projects/>
    </div>
  );
}

export default App;
