export default async function Users () {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await data.json()
  return (
    <ul>
    {users.map((user: {id:number, name: string})=> {
      return <li key={user.id}>{user.name}</li>
    })}
    </ul>
  )
}