import React from 'react'
import { useUser } from '../context/useContext'

const Admin = () => {
    const user = useUser();

    return (
        <div className='w-full'>Admin</div>
    )
}

export default Admin