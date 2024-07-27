import React from 'react';
import GoogleMapBusTracking from '../components/GoogleMap/GoogleMapBusTracking';

const Admin = () => {
    const markers = [
        { lat: 40.712776, lng: -74.005974 }, // New York
        { lat: 34.052235, lng: -118.243683 }, // Los Angeles
        { lat: 41.878113, lng: -87.629799 }, // Chicago
    ];

    return (
        <div className="w-full">
            <GoogleMapBusTracking markers={markers} />
        </div>
    );
};

export default Admin;
