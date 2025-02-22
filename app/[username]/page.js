import React from 'react'
import Payment from '../component/paymentaaa'
import { notFound } from "next/navigation"
import connectDB from '../db/connectdb'
import user from '../models/user'

const PAGE = async ({ params }) => {
  // if the username is not found in the database show not found page
  const checkuser = async () => {
    await connectDB()
    var oriparams = await params
    let p = await user.findOne({ username: oriparams.username })
    if (!p) {
      return notFound()
    }
  }

  await checkuser()

  return (
    <Payment USERNAME={params.username} />
  )
}

export default PAGE

export async function generateMetadata({ params }) {
  let oriparams = await params
  return {
    title:  `${oriparams.username} - Get Me a Chai`
  }
}