import React from 'react';
import axios from 'axios';

const CustomButtonRenderer = (props) => {
    const accountId = props.data.accountId;
    const handleClick = async () => {
        try {
            await axios.post(`http://localhost:4000/drivers/verify/${accountId}`);
        } catch (error) {
            console.error('Error updating verification status:', error);
        }
    };

    return (
        <button className='px-6 rounded-xl bg-primary' onClick={handleClick}>
            Verify
        </button>
    );
};

export default CustomButtonRenderer;
