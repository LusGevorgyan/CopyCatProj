import React from 'react'

const Footer = (props) => {
  return (
    <div 
      style={{
        backgroundColor: props.bgColor,
      }}
      className={`mt-[20px] text-[20px] leanding-[22px] font-["Space Grotesk, sans-serif" ] text-center`}
    >
    {props.children}
        Made with 
        <a href='https://emojipedia.org/red-heart/'>❤️ in Philadelphia</a>
    </div>
  )
}

export default Footer