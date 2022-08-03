import React from 'react'

const Button = (props) => {
  return (
    <div className='ml-[20px]'>
        <button
            style={{
              border: props.border,
              backgroundColor: props.bgColor,
              fontSize: props.size,
              width: props.width,
              height: props.height,
              color: props.textColor
            }}
            className={`hover:no-underline font-bold font-space-grotesk rounded-[4px] py-[12px] px-[24px] flex items-center justify-center`}
        > 
            {props.children}
        </button>
    </div>
  )
}

export default Button