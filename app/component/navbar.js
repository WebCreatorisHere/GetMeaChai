"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'

const NAVBAR = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)

  return (
    <nav className='bg-gray-900 flex justify-between text-white px-10 items-center max-md:pb-4 max-md:flex-col md:h-16'>
      <Link href={"/"}><div className="logo text-xl font-bold flex justify-center items-center"><img loading="lazy" className='mb-[1.15rem] w-16' src="tea.gif" alt="tea" /><span>GetMeaChai!</span></div></Link>
     
      <div className=' space-x-3 relative'>
        {session && <>
          <button onClick={() => { setshowdropdown(!showdropdown) }} onBlur={() => {
            setTimeout(() => {
              setshowdropdown(false)
            }, 300);
          }} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.name} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          <div id="dropdown" className={`left-[-10px] mt-2 absolute z-10 ${showdropdown ? "" : "hidden"} bg-[#374151] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 `}>
            <ul className="py-2 text-sm text-[#fff] dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href={"/dashboard"} className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white">Your page</Link>
              </li>

              <li onClick={() => { signOut({
    callbackUrl: "/", // Redirect after logout
  }); }}>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>
        </>}

        {session &&
          <button onClick={() => { signOut({
            callbackUrl: "/", // Redirect after logout
          }); }} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center media-2-out'>Logout</button>
        }

        {!session && <Link href={"/login"}>
          <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Login</button>
        </Link>}
      </div>
    </nav>
  )
}

export default NAVBAR