import React from 'react'
import Experience from './components/Experience';
import Needl from './assets/images/xp/needl.jpeg';
import Block from './assets/images/xp/9thblock.jpeg';
import Hacktober from './assets/images/xp/hacktober.jpeg'
import Ignitus from './assets/images/xp/ignitus.jpeg'
import IITBh from './assets/images/xp/iitbhi.jpeg'
import MLH from './assets/images/xp/mlh.jpeg'
import Microsoft from './assets/images/xp/microsoft.jpeg'

function Experiences() {
  return (
    <div className='card m-2 w-full'>
            <div className='text-2xl text-left font-semibold pb-4'>Experiences</div>
            <Experience img={Needl} role='SDE Intern'  company='Needl.AI' duration='May 2021 - Jul 2021'/>
            <Experience img={Block} role='Full Stack developer'company='9th Block' duration='Dec 2020 - Mar 2021' />
            <Experience img={Ignitus} role='SDE Intern'  company='Ignitus' duration='Apr 2020 - Jun 2020' />
            <Experience img={IITBh} role='General Secretary of Cultural and Media Affairs'  company='IIT Bhilai' duration='Apr 2019 - Apr 2020' />
    </div>
  )
}

export default Experiences