"use server"
import Razorpay from "razorpay"
import Payment from "../models/payment"
import connectDb from "../db/connectdb"
import User from "../models/user"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
    //fetching the secret from database
    let saveduser = await User.findOne({ username: to_username })
    const secret = saveduser.razsec
    const id = saveduser.razid

    var instance = new Razorpay({ key_id: id, key_secret: secret })


    let x = await instance.orders.create({
        amount: amount*100,
        currency: "INR",

    })

    await Payment.create({ oid: x.id, amount: amount*100, to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x
}

export const fetchuser = async (username) => {
    await connectDb()
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}
export const fetchpayments = async (username) => {
    await connectDb()
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(5).lean(true)
    return p

}

export const updateprofile = async (data, oldusername) => {
    await connectDb()
    let ndata = Object.fromEntries(data)


    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })

        if (u) {
            return { error: "Username already exists" }
        }
        await User.updateOne({ email: ndata.email }, ndata)
        // // now update all the usernames in the user table
        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })

    }
    else {
        await User.updateOne({ email: ndata.email }, ndata)
    }

}