import { notFound } from "next/navigation"

export default async function UserPage ({params}: {params: Promise<{userID: string}>}) {
  const {userID} = await params
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
  const data = await response.json()
  if (!data.name) {
    notFound();
  }
  
  return (
  <h1>{data?.name}</h1>
  )
}