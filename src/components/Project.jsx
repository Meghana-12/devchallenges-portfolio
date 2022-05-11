import React from 'react'

function Project(props) {
  return (
    <div className='flex flex-col'>
        <div className='rounded-md overflow-hidden'>
            <img src={props.img} alt={props.title} />
        </div>
        <div className='flex flex-col p-4 '>
            <div className='flex flex-row flex-wrap '>
            {props.hashtags.map(hashtag => ( <div className='text-zinc-700 font-medium text-sm'> #{hashtag} {" "}</div> ))}
            </div>
            <div className='text-xl font-semibold text-left text-zinc-700 pt-4 pb-6'>{props.title}</div>
            <div className='text-zinc-400 font-medium text-sm text-left'>{props.description}</div>
            <div className=''>
              <button className='btn '>Check out the project!</button>
              <button className='btn-outlined '>Here's the Code</button>
              {/* use icons instead */}
            </div>
        </div>

    </div>
  )
}

export default Project