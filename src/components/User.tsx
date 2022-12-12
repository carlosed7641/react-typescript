import { useState } from 'react';


interface UserInterface {
    uid: string
    name: string
}

const tempUser: UserInterface = {
    uid: "XYZ",
    name: "Generic User"
}

export const User = () => {

const [user, setUser] = useState<UserInterface>(tempUser)

const login = ():void => {
    setUser({
        uid: 'ABC123',
        name: 'Carlos Castro'
    })
}

  return (
    <div className='mt-5'>
        <h3>Usuario: useState</h3>
        <button
            onClick={login}
            className='btn btn-outline-primary'>
            Login
        </button>
        {
        (!user) 
        ? <pre>No hay usuario</pre>
        : <pre>{JSON.stringify(user)}</pre>
        }

    </div>
  )
}
