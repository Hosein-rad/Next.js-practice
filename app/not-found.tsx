import Link from 'next/link'
import './globals.css'

export default function notFound() {
  return (<div className='mt-8 flex flex-col justify-center items-center'>
    <h1 className='mt-6 text-red-500 text-7xl'>404 | Not Found</h1>
    <p className='mt-3'>the page you&apos;re looking for does not exist...</p>
    <Link href={'/'} className='p-2 mt-6 text-2xl text-green-300 bg-gray-900 border-2 border-amber-100'>click here to go back home.</Link>
  </div>
  )
}