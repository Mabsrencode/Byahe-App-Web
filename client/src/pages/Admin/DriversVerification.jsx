import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import moment from 'moment';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const DriversVerification = () => {
    const [rowData, setRowData] = useState([]);
    const [colDefs, setColDefs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:4000/drivers/unverified");
                const data = response?.data?.documents || [];
                console.log("fetch data: ", data);

                const filteredData = data.map(item => ({
                    username: item.username,
                    email: item.email,
                    verification: item.verification,
                    feedback: item.feedback ? item.feedback : "No feedback available.",
                    accountId: item.accountId,
                    // $createdAt: moment(item.$createdAt).format('YYYY-MM-DD HH:mm:ss') + " - " + moment(item.$createdAt).fromNow(),
                    // $updatedAt: moment(item.$updatedAt).format('YYYY-MM-DD HH:mm:ss') + " - " + moment(item.$updatedAt).fromNow(),
                }));

                setRowData(filteredData);

                setColDefs([
                    { field: 'username', headerName: 'Username' },
                    { field: 'email', headerName: 'Email' },
                    { field: 'verification', headerName: 'Verification' },
                    { field: 'feedback', headerName: 'Feedback' },
                    { field: 'accountId', headerName: 'Account ID' },
                    // { field: '$createdAt', headerName: 'Created At' },
                    // { field: '$updatedAt', headerName: 'Updated At' },
                    { field: 'action', headerName: 'Action' },
                ]);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    console.log("Column Definitions:", colDefs);
    console.log("Row Data:", rowData);

    return (
        <section className='w-full h-full'>
            <div className="ag-theme-quartz h-screen w-full">
                <AgGridReact
                    pagination
                    rowStyle={{
                        font: '12px sans-serif',
                        fontWeight: 600,
                        color: "gray"
                    }}
                    rowData={rowData}
                    columnDefs={colDefs}
                    columnTypes={{
                        font: '16px sans-serif',
                        fontWeight: 700,
                    }}
                    loading={loading}
                />
            </div>
        </section>
    );
};

export default DriversVerification;
