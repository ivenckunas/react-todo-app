import React from 'react'

function Hero({ title, subtitle, color }) {

  if (title.length === 0 && subtitle.length === 0) {
    return <div className='hero'></div>
  }

  return (
    < div style={{ backgroundColor: color }} className="hero" >
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </ div>
  )
}

export default Hero