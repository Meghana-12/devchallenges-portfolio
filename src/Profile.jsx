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
            <div> IIT Bhilai CSE '22 | CGPA: 8.1</div>
          </div>
          <div className='pt-4 pb-4 '>
              <div className='flex flex-row text-zinc-700 dark:text-zinc-300 text-sm'>
                  <span className="material-icons">email</span> <div className='pl-2'>meghana.cosmos@gmail.com</div>
              </div>
              <div className='flex flex-row text-zinc-700 dark:text-zinc-300 text-sm'>
                  <span className="material-icons">link</span> <div className='pl-2'>Linkedin</div>
              </div>
              <div>
                <span> Github </span>
              </div>
              <div>
                <span> twitter  </span>
              </div>
              {/* add more social  */}
          </div>
        </div>
        <div className='text-left text-zinc-400 text-sm'>I build apps, listen to music and tryin to figure things out.</div>
        <button className='btn self-center place-end'>Take a look at my resume!</button>
        </div>
    </div>
  )
}

export default Profile