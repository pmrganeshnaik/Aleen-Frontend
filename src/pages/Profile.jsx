import React from 'react'
import axios from '../api/axiosInstance';

function Profile() {
  const logout = async () => {
    try {
      const response = await axios.get('/logout');
      alert(response.data.message);
    } catch (err) {
      alert('Logout failed');
    }
  };

  return <button onClick={logout}>Logout</button>;
};



export default Profile


