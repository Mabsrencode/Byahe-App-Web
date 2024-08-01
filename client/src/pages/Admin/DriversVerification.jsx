import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import axios from 'axios';
const DriversVerification = () => {
    const [usersData, setUsersData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = (await axios.get("http://localhost:4000/drivers/unverified"))?.data?.documents;
                setUsersData(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <div>DriversVerification</div>
    )
}

export default DriversVerification