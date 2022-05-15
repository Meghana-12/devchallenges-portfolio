import React from 'react'

function Profile(props) {
  return (
    <div className='card flex'>
        <div className='rounded-md overflow-hidden w-1/4'>
        <img src={props.img} className='' alt="profile-img"/>
        </div>
        <div className='flex flex-col p-4 w-full'>
          <div className='flex flex-row justify-between'>
          <div>
            <div className=' text-2xl font-semibold text-left text-zinc-700 dark:text-white pt-4'> Meghana Varanasi</div>
            <div className='text-sm text-left text-zinc-400 pt-1'> Frontend Developer</div>
            {/* add graduation and recent work */}
          </div>
          <div className='pt-4 pb-4 '>
              <div className='flex flex-row text-zinc-700 dark:text-zinc-300 text-sm'>
                  <span className="material-icons">email</span> <div className='pl-2'>meghana.cosmos@gmail.com</div>
              </div>
              <div className='flex flex-row text-zinc-700 dark:text-zinc-300 text-sm'>
                  <span className="material-icons">link</span> <div className='pl-2'>Linkedin</div>
              </div>
              {/* add more social  */}
          </div>
        </div>
        <div className='text-left text-zinc-400 text-sm'>Self-motivated developer, who is willing to learn and create outstanding UI applications.</div>
        <button className='btn self-center'>Take a look at my resume!</button>
        </div>
    </div>
  )
}

export default Profile