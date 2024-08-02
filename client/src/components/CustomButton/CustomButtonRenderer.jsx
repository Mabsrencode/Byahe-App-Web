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
        }
    };

    return (
        <button className='px-6 rounded-xl bg-primary' onClick={handleClick}>
            Verify
        </button>
    );
};

export default CustomButtonRenderer;
