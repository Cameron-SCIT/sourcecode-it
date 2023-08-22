import React from 'react'
import "./HomePage.css"
import FlipCard from './Components/FlipCard'

export default function HomePage() {
  return (
    <div className='home-wrapper'>
      <h1 className='tw-np'>Source Code IT</h1>
      <main className='main-home'>
        <article className='home-lhs'>
          <h2 className='tw-ng'>Who Are We</h2>
        </article>
        <article className='card-holder'>
          <h2 className='tw-ng'>Our Development Team</h2>
          <div className="tb1">
            <FlipCard
              src="/assets/Cam-Avatar-png.png"
              alt="Cam Logo"
              title="Cameron Stocks"
              lines={[

              ]}
            />
            <FlipCard
              src="/assets/Duval-Avatar-png.png"
              alt="Duval Logo"
              title="Duval Coetzer"
              lines={[]}
            />
          </div>
          <div className="tb1">
            <FlipCard
              src="/assets/Sashin-Avatar-png.png"
              alt="Duval Logo"
              title="Duval Coetzer"
              lines={[]}
            />
            <FlipCard
              src="/assets/Angelo-Avatar-png.png"
              alt="Duval Logo"
              title="Duval Coetzer"
              lines={[]}
            />
          </div>
        </article>
      </main>
    </div>
  )
}
