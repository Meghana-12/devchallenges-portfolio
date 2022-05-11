import React from 'react'
import Project from './components/Project'
import ProfileImage from './assets/images/2018bday.jpeg';
import Portfolio from './assets/images/projects/portfolio.png';
import ChatApp from './assets/images/projects/chat-app.png';
import Kozy from './assets/images/projects/kozy.png'

function Projects() {
    const [nav, setNav] = React.useState(1)
  return (
    <div  className='flex flex-col '>
        <div className='card text-left font-semibold m-2 w-full dark:text-white'> Projects (4)</div>
        {/* Filter */}
           
                { nav === 1 && (  <div className='flex flex-row transition ease-in'>
            <div className='card m-2 w-1/2'>
                <Project img={Portfolio} title='Project 1' hashtags={['ReactJS']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'/>
            </div>
            <div className='card m-2 w-1/2'>
                <Project img={ChatApp} title='Project 2' hashtags={['ReactJS']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'/>
            </div></div>)
}
{ nav ===2 && (  <div className='flex flex-row transition ease-in'>
            <div className='card m-2 w-1/2'>
                <Project img={Portfolio} title='Project 3' hashtags={['ReactJS']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'/>
            </div>
            <div className='card m-2 w-1/2'>
                <Project img={ChatApp} title='Project 4' hashtags={['ReactJS']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'/>
            </div></div>)
}
   
        <div className='flex justify-center'>
            <button className={ nav === 1 ? 'nav-chip-selected' : 'nav-chip'} onClick={() => setNav(1)}> 1</button>
            <button className={ nav === 2 ? 'nav-chip-selected' : 'nav-chip'} onClick={ () => setNav(2)}> 2</button>
            </div>
        {/* navigation */}
    </div>
  )
}

export default Projects