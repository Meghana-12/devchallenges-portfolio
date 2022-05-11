import React from 'react'

function Experience(props) {
  return (
    <div className='flex flex-row pt-2 pb-2 items-center'>
        <div className='w-1/4'>
            <img src={props.img} alt={props.company}/>
        </div>
        <div className='flex flex-col p-4 text-left justify-around'>
            <div className='text-zinc-400 text-xs pb-4'>
                {props.duration}
            </div>
            <div className='text-zinc-800 text-md font-semibold'>{props.role + ' '}</div>
            <div className='text-zinc-600 text-md italic pb-2'>{props.company}</div>
            <div className='text-zinc-400 text-sm pb-4'>{props.children}</div>
            {/* <div></div> tech stack */}
        </div>
    </div>
  )
}

export default Experience