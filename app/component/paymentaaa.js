"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import Image from 'next/image.js'
import { fetchpayments, initiate, fetchuser } from '../actions/ussseraction.js'
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useSearchParams } from 'next/navigation.js';
import { useSession, signIn, signOut } from "next-auth/react"


const PAYMENT = ({ USERNAME }) => {
  const [payform, setpayform] = useState({ name: "", message: "", amount: "" })
  const [curruser, setcurruser] = useState({})
  const [payments, setpayments] = useState([])
  const searchparam = useSearchParams()
  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {

    if (!session) {
      router.push("/login")
    }

  }, [router, session])
  
  useEffect(() => {
    getdata()

  }, [])
  

  useEffect(() => {
    if (searchparam.get("paymentdone") == "true") {
      toast.success('🦄 Pyment successfully made!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    router.push(`${USERNAME}`)
  }, [])


  const pay = async (amount) => {

    let a = await initiate(amount, USERNAME, payform)
    let orderId = a.id

    var options = {
      "key": curruser.razid, // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "BuyMeaChai", //your business name
      "description": "Test Transaction",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png",
      "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/cpi/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Yash Dwivedi", //your customer's name
        "email": "yashthecool2000.com",
        "contact": "9111209203" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    }
    var rzp1 = new Razorpay(options)
    rzp1.open()
    console.log("you arev going to pay ", amount)
  }

  const handlechange = (e) => {
    setpayform({ ...payform, [e.target.name]: e.target.value })
  }

  const getdata = async (params) => {
    let u = await fetchuser(USERNAME)
    setcurruser(u)

    let dbpayments = await fetchpayments(USERNAME)
    setpayments(dbpayments)
    console.log(dbpayments, u)
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
      <Script src={"https://checkout.razorpay.com/v1/checkout.js"}></Script>

      <div className='cover bg-red-50 relative'>
        <div className="cover h-[337px] w-full max-sm:h-[200px]"><Image unoptimized={true} loading="lazy" className='w-full h-full' src={curruser.coverpic} alt="" /></div>
        <div className='db h-[97px] w-[100px] sm:w-[106px] sm:h-[106px] top-[75%] right-[36%] absolute sm:top-[83%] sm:right-[47%]'><Image unoptimized={true} loading="lazy" className='rounded-full h-full outline outline-[0.5px] outline-[#43413F]' src={curruser.profilepic} alt="" /></div>
      </div>
      <div className="info flex flex-col items-center gap-2 my-[4.5rem]">
        <div className='font-bold text-lg'>
          @{USERNAME}
        </div>
        <div className='text-slate-400'>
          Lets help {USERNAME} to get a chai.
        </div>
        <div className='text-slate-400 text-center'>
          Payments done: {payments.length} .&nbsp; {USERNAME} has raised ₹{payments.reduce((a, b) => a + b.amount / 100, 0)
          }
        </div>

        <div className="payment flex max-sm:flex-col gap-8 w-[80%] max-sm:w-[90%] mt-8">
          <div className="supporters sm:w-1/2 w-full bg-slate-900 rounded-lg p-6">
            {/* show list of all the supporters as a leaderboard */}
            <h2 className='text-2xl my-5 font-bold' >Supporters</h2>
            <ul className='mx-3 text-lg space-y-8 mr-0'>
              {payments.length == 0 && <div>No payments yet!!</div>}
              {payments.map((e) => {
                return <li className='my-1.5 flex gap-2 items-center' key={uuidv4()}>
                  <Image unoptimized={true} loading="lazy" className='w-7 rounded-full' src="avater.gif" alt="" />
                  <span className=''>{e.name} donated <span className='font-bold'>₹{e.amount} </span><span>with a message "{e.message}"</span>
                  </span></li>
              })}

            </ul>
          </div>

          <div className="makepayments sm:w-1/2 w-full bg-slate-900 rounded-lg p-6">
            <h2 className='font-bold text-2xl my-2'>Make a Payment</h2>
            <div className="type flex flex-col gap-2">
              <input onChange={handlechange} value={payform.name} placeholder='Enter your name' className='w-full p-3 bg-slate-800 rounded-lg text-white' type="amount" name='name' />
              <input onChange={handlechange} value={payform.message} placeholder='Enter your message' className='w-full p-3 bg-slate-800 rounded-lg text-white' type="amount" name='message' />
              <input onChange={handlechange} value={payform.amount} placeholder='Enter your amount' className='w-full p-3 bg-slate-800 rounded-lg text-white' type="number" name='amount' />
              <button onClick={() => { pay(Number.parseInt(payform.amount)) }} type="button" className="text w-full-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 disabled:from-slate-400" disabled={payform.name?.length < 3 || payform.message?.length < 3 || payform.amount?.length < 1}>Pay now!!</button>
            </div>

            <div className='flex gap-3 mt-5'>
              {/* {or choose from these amounts} */}
              <button className='bg-slate-800 sm:p-3 py-[0.3rem] px-[0.4rem] rounded-lg' onClick={() => { pay(15) }}>Pay ₹15</button>
              <button className='bg-slate-800 sm:p-3 py-[0.3rem] px-[0.4rem] rounded-lg' onClick={() => { pay(25) }}>Pay ₹25</button>
              <button className='bg-slate-800 sm:p-3 py-[0.3rem] px-[0.4rem] rounded-lg' onClick={() => { pay(35) }}>Pay ₹35</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PAYMENT