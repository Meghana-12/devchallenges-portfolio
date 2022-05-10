import React from 'react'
import Project from './components/Project'
import ProfileImage from './assets/images/2018bday.jpeg';

function Projects() {
  return (
    <div  className='flex flex-col '>
        <div className='card w-full text-left font-semibold m-2'> Projects (4)</div>
        {/* Filter */}
            <div className='flex flex-row'>
            <div className='card m-2 w-1/4'>
                <Project img={ProfileImage} title='Project 1' hashtags={['ReactJS']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'/>
            </div>
            <div className='card m-2 w-1/4'>
                <Project img={ProfileImage} title='Project 1' hashtags={['ReactJS']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'/>
            </div>
            <div className='card m-2 w-1/4'>
                <Project img={ProfileImage} title='Project 1' hashtags={['ReactJS']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'/>
            </div>
            <div className='card m-2 w-1/4'>
                <Project img={ProfileImage} title='Project 1' hashtags={['ReactJS']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'/>
            </div>
        </div>
        {/* navigation */}
    </div>
  )
}

export default Projects