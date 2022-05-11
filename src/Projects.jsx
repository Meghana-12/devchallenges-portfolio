import React from 'react'
import Project from './components/Project'
import ProfileImage from './assets/images/2018bday.jpeg';
import Portfolio from './assets/images/projects/portfolio.png';
import ChatApp from './assets/images/projects/chat-app.png';
import Kozy from './assets/images/projects/kozy.png'

function Projects() {
  return (
    <div  className='flex flex-col '>
        <div className='card text-left font-semibold m-2 w-full'> Projects (4)</div>
        {/* Filter */}
            <div className='flex flex-row'>
            <div className='card m-2 w-1/2'>
                <Project img={Portfolio} title='Project 1' hashtags={['ReactJS']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'/>
            </div>
            <div className='card m-2 w-1/2'>
                <Project img={ChatApp} title='Project 1' hashtags={['ReactJS']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'/>
            </div>
            {/* <div className='card m-2 w-1/4'>
                <Project img={Kozy} title='Project 1' hashtags={['ReactJS']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'/>
            </div>
            <div className='card m-2 w-1/4'>
                <Project img={Kozy} title='Project 1' hashtags={['ReactJS']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'/>
            </div> */}
        </div>

        {/* navigation */}
    </div>
  )
}

export default Projects