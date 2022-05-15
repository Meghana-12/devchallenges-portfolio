import React from 'react'

function Project(props) {
  return (
    <div className='flex flex-col' >
        <div className='rounded-md overflow-hidden'>
            <img src={props.img} alt={props.title} />
        </div>
        <div className='flex flex-col sm:p-4 '>
            <div className='flex flex-row flex-wrap gap-3 '>
            {props.hashtags.map(hashtag => ( <div key={hashtag} className='text-zinc-700 dark:text-zinc-300 font-medium text-sm'> #{hashtag} {" "}</div> ))}
            </div>
            <div className='text-xl font-semibold text-left text-zinc-700 dark:text-zinc-300 pt-4 pb-6'>{props.title}</div>
            <div className='text-zinc-400 font-medium text-sm text-left'>{props.children || props.description}</div>
            <div className='self-end'>
              <button className='btn' >Check out the project!</button>
              <button className='btn-outlined '>Here's the Code</button>
              {/* use icons instead */}
            </div>
        </div>

    </div>
  )
}

export default Project