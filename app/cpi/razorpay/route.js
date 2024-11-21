"use server"
import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import mongoose from "mongoose";
import Payment from "../../models/payment";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import connectDB from "../../db/connectdb";
import payment from "../../models/payment";
import User from "../../models/user";
import { headers } from 'next/headers';


export const POST = async (req) => {
    const headersList = headers(); // Gets headers object
  const host = headersList.get('host'); // Get the host
  const protocol = headersList.get('x-forwarded-proto') || 'http'; // Check for protocol
  const currentUrl = `${protocol}://${host}`;
    await connectDB()
    let body = await req.formData()
body = Object.fromEntries(body.entries())
    console.log(body)
    
    // check if razor pay order id is available
    let p = await Payment.findOne({ oid: body.razorpay_order_id })
    if (!p) {
        return NextResponse.json({ success: false, message: "Order Id not found" })
    }

    //fetching the secret from database
   let saveduser = await User.findOne({username:p.to_user})
   const secret = saveduser.razsec

    let xx = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, secret)
    let paymentdone = false
console.log(xx)
    if (xx) {

        const updatedpayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: "true" }, { new: true })
        console.log(currentUrl)
      return NextResponse.redirect(`${currentUrl}/`)

    }
    else {
        return NextResponse.json({ success: false, message: "Payment Varification Failed" })
    }

}