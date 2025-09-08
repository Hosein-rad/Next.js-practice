'use client'

import { useState } from "react";

export async function sendGETReq() {
  const res = await fetch('/api/hello')
  const data = await res.json()
  return data;
}


export default function ApiReq() {
   const [message, setMessage] = useState('')
   sendGETReq().then((data)=>
    setMessage(data.message)
   )

  return <div>
  <p>{message}</p>
</div>
}