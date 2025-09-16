import React from "react";

export default function UsersLayout( {children}: {children: React.ReactNode} ) {
  return <div>
    <h1 className="text-green-500 text-center">This is a Layout for all the routes under Users. <br/>(add /1-10 to endpoint)</h1>
    {children}
  </div>
}