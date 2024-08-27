import React from 'react'
import Payment from '../component/paymentaaa'
import { notFound } from "next/navigation"
import connectDB from '../db/connectdb'
import user from '../models/user'

const page = async ({ params }) => {
  // if the username is not found in the database show not found page
  const checkuser = async () => {
    await connectDB()
    let p = await user.findOne({ username: params.username })
    if (!p) {
      return notFound()
    }
  }

  await checkuser()

  return (
    <Payment USERNAME={params.username} />
  )
}

export default page

export async function generateMetadata({ params }) {
  return {
    title:  `${params.username} - Get Me a Chai`
  }
}