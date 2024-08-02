import React, { useState } from 'react';
import axios from 'axios';

const CustomButtonRenderer = (props) => {
    const [loading, setLoading] = useState(false)
    const accountId = props.data.action;
    const handleClick = async () => {
        try {
            setLoading(true);
            await axios.patch(`http://localhost:4000/drivers/verify/${accountId}`);
        } catch (error) {
            console.error('Error updating verification status:', error);
        } finally {
            setLoading(false);
            window.location.reload();
        }
    };

    return (
        <button disabled={loading} className='px-6 rounded-xl bg-primary disabled:bg-primary-100' onClick={handleClick}>
            {loading ? "Processing..." : "Verify"}
        </button>
    );
};

export default CustomButtonRenderer;
