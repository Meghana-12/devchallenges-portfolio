import React from 'react'
import Achievement from './components/Achievement';
// import Needl from './assets/images/xp/needl.jpeg';
// import Block from './assets/images/xp/9thblock.jpeg';
import Hacktober from './assets/images/xp/hacktober.jpeg'
// import Ignitus from './assets/images/xp/ignitus.jpeg'
// import IITBh from './assets/images/xp/iitbhi.jpeg'
import MLH from './assets/images/xp/mlh.jpeg'
import Microsoft from './assets/images/xp/microsoft.jpeg'

function Achievements() {
  return (
    <div className='card m-2'>
            <div className='text-2xl text-left font-semibold pb-4'>Achievements</div>
            <Achievement img={MLH} role="MLH Prep Fellow '22"  duration='Apr 22'/>
            <Achievement img={Microsoft} role='Mentee, Microsoft Engage 2021'  duration='Nov 2021' />
            <Achievement img={MLH} role='Tie University Global Business Hackathon | Winning Team' duration='Mar 2021' />
            <Achievement img={MLH} role='Hacktoberfest Challenge 2020'  duration='Oct 2020' />
            <Achievement img={MLH} role='Technica Hackathon | Winning team ' duration='Oct 2020' />
    </div>
  )
}

export default Achievements