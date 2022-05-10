import React from 'react'

function Profile(props) {
  return (
    <div className='card '>
        <div className='rounded-md overflow-hidden'>
        <img src={props.img} className='' alt="profile-img"/>
        </div>
        <div className=' text-2xl  font-semibold text-left text-zinc-700 pt-4'> Meghana Varanasi</div>
        <div className='text-sm text-left text-zinc-400 pt-1'> Frontend Developer</div>
        <div className='pt-4 pb-4 '>
            <div className='flex flex-row text-zinc-700 text-sm'>
                <span class="material-icons">email</span> <div className='pl-2'>meghana.cosmos@gmail.com</div>
            </div>
            <div className='flex flex-row text-zinc-700 text-sm'>
                <span class="material-icons">link</span> <div className='pl-2'>Linkedin</div>
            </div>
        </div>
        <div className='text-left text-zinc-400 text-sm'>Self-motivated developer, who is willing to learn and create outstanding UI applications.</div>
        <button className='btn btn-primary'>Take a look at my resume!</button>
    </div>
  )
}

export default Profile