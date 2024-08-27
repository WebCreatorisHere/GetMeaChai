import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import mongoose from "mongoose";
import Payment from "../models/payment";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import connectDB from "../db/connectdb";
import payment from "../models/payment";
import User from "../models/user";

export const POST = async (req) => {
    await connectDB()
    let body = await req.formData()
    body = Object.fromEntries(body)
    
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
    //UPDATE payment
    if (xx) {

        const updatedpayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: "true" }, { new: true })
console.log(updatedpayment.to_user)
        NextResponse.redirect((process.env.NEXT_PUBLIC_URL+"/" + updatedpayment.to_user) ? paymentdone = true : paymentdone = false)

    }
    else {
        return NextResponse.json({ success: false, message: "Payment Varification Failed" })
    }

}