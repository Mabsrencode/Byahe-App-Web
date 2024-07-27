import React, { useCallback, useMemo } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { GOOGLE_MAP_KEY } from '../../lib/apiKeys';

const GoogleMapBusTracking = ({ markers }) => {
    const center = useMemo(() => ({
        lat: markers[0]?.lat || 0,
        lng: markers[0]?.lng || 0,
    }), [markers]);

    const mapContainerStyle = {
        width: '100%',
        height: '800px',
    };

    const handleLoad = useCallback(() => {
        console.log('Map Loaded');
    }, []);

    return (
        <LoadScript googleMapsApiKey={""}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
                onLoad={handleLoad}
            >
                {markers.map((marker, index) => (
                    <MarkerF key={index} position={{ lat: marker.lat, lng: marker.lng }} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapBusTracking;
