import React, { useEffect, useState } from 'react'
import axios from 'axios';
const DriversVerification = () => {
    const [usersData, setUsersData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get("/drivers/unverified")
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [usersData])
    return (
        <div>DriversVerification</div>
    )
}

export default DriversVerification