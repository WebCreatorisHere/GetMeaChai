"use client"
import { SessionProvider } from "next-auth/react"


export default function sessionwrapperr({children}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}