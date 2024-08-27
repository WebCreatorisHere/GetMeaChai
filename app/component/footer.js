import React from 'react'

const footer = () => {
  const curryear = new Date().getFullYear()
  return (
    <div className='bg-gray-800 flex text-white px-5 text-center md:px-10 items-center h-auto md:h-6 justify-center'>
        <p className='text-center'>Copyright &copy; {curryear} GetMeaChai - All rights reserved</p>
    </div>
  )
}

export default footer