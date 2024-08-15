import React from 'react'
import {auth,signOut} from '@/auth'
import { json } from 'stream/consumers';


const Admin = async () => {
  const session = await auth();
  return (
    
    <>
    <div>Admin</div>
    <div>{JSON.stringify(session)}</div>
    <form action={
      async () => {
        "use server";
        await signOut();
      }
    }>
      <button type='submit'>
        Logout
      </button>
    </form>

    </>
  )
}

export default Admin