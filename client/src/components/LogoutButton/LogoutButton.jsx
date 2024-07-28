import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
const LogoutButton = () => {
    const navigate = useNavigate();
    const [, , removeCookie] = useCookies([]);
    const handleLogout = async () => {
        try {
            const result = await axios.get('http://localhost:4000/auth/logout', { withCredentials: true });
            console.log(result);
            removeCookie('biyahe-user-tk');
            navigate('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    return (
        <button className='bg-primary mt-2 rounded-full py-2 hover:bg-primary-100 transition-all' onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket" title='Log Out'></i>
        </button>
    );
}

export default LogoutButton;

