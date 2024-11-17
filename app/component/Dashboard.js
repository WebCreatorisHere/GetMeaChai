"use client"
import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { updateprofile, fetchuser } from '../actions/ussseraction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'

const DASHBOARD = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [form, setform] = useState({})
  
  useEffect(() => {
    if (!session) {
      router.push("/login")
    }
    else{
      
      getdata()
    }
  }, [session, router])

  const getdata = async () => {
    let u = await fetchuser(session.user.name)
    setform(u)
  }

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handlesubmit = async (data) => {
    let a = await updateprofile(data, session.user.name)
    toast('🦄 Profile updated!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });

  }
  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="light"
/>
    <div className='container mx-auto md:max-w-[50vw] max-w-[86vw] mb-24 flex flex-col gap-2'>
      <h1 className='font-bold text-3xl text-center my-8'>Welcome to your Dashboard</h1>

      <form className='space-y-2' action={handlesubmit}>
        <div className="flex gap-1 flex-col"><label className='font-bold' htmlFor="name">
          Name
        </label>
          <input onChange={handlechange} value={form.name ? form.name : ""} className='w-full p-3 bg-slate-800 rounded-lg text-white' type="text" id='name' name='name' />
        </div>


        <div className="flex gap-1 flex-col"><label className='font-bold' htmlFor="email">
          Email
        </label>
          <input onChange={handlechange} value={form.email ? form.email : ""} className='w-full p-3 bg-slate-800 rounded-lg text-white' type="text" id='email' name='email' />
        </div>


        <div className="flex gap-1 flex-col"><label className='font-bold' htmlFor="username">
          Username
        </label>
          <input onChange={handlechange} value={form.username ? form.username : ""} className='w-full p-3 bg-slate-800 rounded-lg text-white' type="text" id='username' name='username' />
        </div>


        <div className="flex gap-1 flex-col"><label className='font-bold' htmlFor="profilepic">
          Profile Picture
        </label>
          <input onChange={handlechange} value={form.profilepic ? form.profilepic : ""} className='w-full p-3 bg-slate-800 rounded-lg text-white' type="text" id='profilepic' name='profilepic' />
        </div>


        <div className="flex gap-1 flex-col"><label className='font-bold' htmlFor="coverpic">
          Cover Picture
        </label>
          <input onChange={handlechange} value={form.coverpic ? form.coverpic : ""} className='w-full p-3 bg-slate-800 rounded-lg text-white' type="text" id='coverpic' name='coverpic' />
        </div>




        <div className="flex gap-1 flex-col"><label className='font-bold' htmlFor="razid">
          Razorpay Id
        </label>
          <input onChange={handlechange} value={form.razid ? form.razid : ""} className='w-full p-3 bg-slate-800 rounded-lg text-white' type="text" id='razid' name='razid' />
        </div>


        <div className="flex gap-1 flex-col"><label className='font-bold' htmlFor="razsec">
          Razorpay Secret
        </label>
          <input onChange={handlechange} value={form.razsec ? form.razsec : ""} className='w-full p-3 bg-slate-800 rounded-lg text-white' type="text" id='razsec' name='razsec' />
        </div>


        <button type="submit" className="text-white mt-5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  mb-[12rem]">Save</button>

      </form>
    </div></>
  )
}

export default DASHBOARD