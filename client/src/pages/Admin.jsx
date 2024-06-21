import React from 'react'
import { useUser } from '../context/useContext'
const Admin = () => {
    const user = useUser();

    return (
        <div>Admin</div>
    )
}

export default Admin