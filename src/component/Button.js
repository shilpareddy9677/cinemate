import React from 'react'

export const Button = ({children}) => {
  return (
    <div>
      <button className=" w-64 py-3 bg-gradient-to-r from-indigo-500 rounded-lg text-xl hover:text-white">{children}</button>
    </div>
  )
}


