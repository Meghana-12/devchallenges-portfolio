import React from 'react'
import Project from './components/Project'
import Portfolio from './assets/images/projects/portfolio.png';
import ChatApp from './assets/images/projects/chat-app.png';
import Kozy from './assets/images/projects/kozy.png'

const projects = [
    {
        img : Portfolio,
        key: 'Portfolio Website (This one right here XD)',
        title : 'Portfolio Website (This one right here XD)',
        hashtags : ['reactjs' , 'tailwind'],
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'
    },
    {
        img : Kozy,
        key : 'Kozy Classroom | LSM | Microsoft Engage 2021',
        title : 'Kozy Classroom | LSM | Microsoft Engage 2021',
        hashtags : ['reactjs' , 'react-router', 'firebase'],
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'
    },
    {
        img : ChatApp,
        key : 'Chat Application',
        title : 'Chat Application',
        hashtags : ['reactjs' , 'firebase'],
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'
    },
    {
        img : Portfolio,
        key : 'Portfolio Website (This one right here XD) -2',
        title : 'Portfolio Website (This one right here XD) -2',
        hashtags : ['reactjs' , 'tailwind'],
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.'
    }

]

function Projects() {
    const [nav, setNav] = React.useState(1)
    const [active, setActive] = React.useState('all')
    const [projectsArray, setProjects] = React.useState(projects)

    const handleClick = (e) => {
        e.preventDefault();
        let value = e.target.getAttribute('data-id')
        if (value !== 'all') {
        setProjects(projects?.filter(item => item?.hashtags?.includes(value)))
        } else {
            setProjects(projects)
        }
        setActive(value)
    }
  return (
    <div  className='flex flex-col gap-4'>
        <div className='card text-left font-semibold w-full dark:text-white'> Projects ({projects.length}) 
            <div className='flex flex-row gap-2 flex-wrap m-2'>
                <button className={`btn-outlined rounded-2xl border-2 ${active === 'all' ? 'dark:bg-sky-800 bg-sky-500 text-white' : ''}`} data-id='all' onClick={(e) => handleClick(e)}> All</button>
                <button className={`btn-outlined rounded-2xl border-2 ${active === 'reactjs' && 'dark:bg-sky-800 bg-sky-500 text-white'}`} data-id='reactjs' onClick={(e) => handleClick(e)}>   ReactJS </button> 
                <button className={`btn-outlined rounded-2xl border-2 ${active === 'firebase' && 'dark:bg-sky-800 bg-sky-500 text-white'}`}  data-id='firebase' onClick={(e) => handleClick(e)}>   Firebase</button>  
                <button className={`btn-outlined rounded-2xl border-2 ${active === 'tailwind' && 'dark:bg-sky-800 bg-sky-500 text-white'}`} data-id='tailwind' onClick={(e) => handleClick(e)} >   Tailwind</button>
            </div>
            </div>
        <div className='flex gap-4'>
            {/* // 0 1 2 3 4 5 6  */}
        {
            [projectsArray[(nav-1)*2],projectsArray[(nav-1)*2 + 1]]?.map(item => (
                <div key={item?.title} className='card md:w-1/2 w-full'>
                    <Project  key={item?.title} img={item?.img} title={item?.title} hashtags={item?.hashtags} description={item?.description}/>
                </div>
            ))
        }
        </div> 
        <div className='flex justify-center'>
            {Array.apply(null , {length :(projectsArray.length/2 + projectsArray.length%2)}).map((item, i) => (
                    <button className={ nav === i+1 ? 'nav-chip-selected' : 'nav-chip'} onClick={() => setNav(i+1)}> {i+1}</button>
            ))}
           
            {/* <button className={ nav === 2 ? 'nav-chip-selected' : 'nav-chip'} onClick={ () => setNav(2)}> 2</button> */}
        </div>  
    </div>
  )
}

export default Projects