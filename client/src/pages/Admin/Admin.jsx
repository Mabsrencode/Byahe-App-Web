import React from 'react';
import GoogleMapBusTracking from '../../components/GoogleMap/GoogleMapBusTracking';
import { useUser } from '../../context/useContext';
const Admin = () => {
    const { driverLocation } = useUser();
    console.log(driverLocation)

    return (
        <div className="w-full">
            <GoogleMapBusTracking markers={driverLocation} />
        </div>
    );
};

export default Admin;
