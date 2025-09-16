'use client'

import { useRef } from "react"

export default function Login () {
  const formVal = useRef<HTMLFormElement>(null)

  async function saveUserToDB(dataArr:string[]) {
      await fetch('http://localhost:3000/api/register', {
        method: "POST",
        body: JSON.stringify({
          user_name: dataArr[0],
          password: dataArr[1]
      }),
      headers: {
    "Content-type": "application/json; charset=UTF-8"
    }
      })
    }

  async function testFetch() {
    await fetch('/api/testPost', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': "*/*"
        },
        method: "POST",
        body: JSON.stringify({
          user_name: 'User3',
          password: 'LOVEU2'
      }),
      })
      // .then((res)=> res.json()).then((res)=>console.log(res))
  }

  return (
    <div>
    <button onClick={()=> testFetch()}>TEST BTN</button>
    <form ref={formVal} className="h-dvh flex flex-col justify-center items-center">
      <div className="m-3 flex flex-col text-center">
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" name="email" className="border-amber-50 border-2 rounded-full"/>
      </div>
      <div className="m-3 flex flex-col text-center">
      <label htmlFor="password">Password: </label>
      <input type="email" id="password" name="password" className="border-amber-50 border-2 rounded-full"/>
      </div>
      <button type="submit" onClick={(e)=> {
        e.preventDefault();
        if (formVal.current?.email?.value && formVal.current?.password?.value) {
          saveUserToDB([formVal.current.email.value, formVal.current.password.value])
        } else {
          alert('fill all the inputs');
        }
        // (formVal.current.email.value && formVal.current.password.value) ? saveUserToDB([formVal.current.email.value, formVal.current.password.value]) : console.log('fill the inputs');
        }} className="p-2 bg-amber-50 rounded-full text-black">Submit</button>
    </form>
    </div>
  )
}