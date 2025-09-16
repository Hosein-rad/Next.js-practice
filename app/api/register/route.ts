import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
// import bcrypt from 'bcrypt'

export async function POST(req: Request) {
  try {
  const { user_name, password } = await req.json()

  // 1) Validate input
  // if (!user_name || !password) {
  //   return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  // }

  // 2) Hash the password
  // const hashedPassword = await bcrypt.hash(password, 10)

  // 3) Store in DB
    const employees = await prisma.employees.create({
      data: {
        user_name: user_name,
        password: password,
      },
    })

    return NextResponse.json({ message: 'User created', employees })
  } catch (error) {
    console.log('API error: ',error)
    return NextResponse.json({ error: 'User already exists' }, { status: 400 })
  }
}
