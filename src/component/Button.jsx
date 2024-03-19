import React from 'react'

function Button({children,type='button',textcolor=text-white,className='',bgcolor='bg-blue-600',...props}) {


  return (
   <button className={`px-4 py-2 rounded-lg ${bgcolor} ${textcolor} ${className} `}{...props}>{children}</button>
  )
}

export default Button