import {prisma} from '@/lib/prisma'
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
  const {user_name, password} = await req.json()
  const newUser = await prisma.employees.create({
    data: {
      user_name,
      password,
    }
  })
   return NextResponse.json({ success: true, user: newUser })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal error...' }, { status: 500 })
  }
}