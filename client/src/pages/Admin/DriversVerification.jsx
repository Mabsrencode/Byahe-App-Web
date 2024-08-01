import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
const DriversVerification = () => {
    const [rowData, setRowData] = useState([]);
    const [colDefs, setColDefs] = useState([]);
    console.log("col data: ", colDefs)
    console.log("row data: ", rowData)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = (await axios.get("http://localhost:4000/drivers/unverified"))?.data?.documents;
                setRowData(data)
                if (data.length > 0) {
                    const keys = Object.keys(data[0]);
                    const columns = keys.map(key => ({
                        field: key
                    }));
                    setColDefs(columns);
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <section className='w-full h-full'>
            <div className="ag-theme-quartz" style={{ height: 600, width: '100%' }}>
                <AgGridReact
                    pagination
                    rowData={rowData}
                    columnDefs={colDefs}
                />
            </div>
        </section>
    )
}

export default DriversVerification