import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, refetch}) => {
  const {email, role} = user;
  //make admin
  const handleAdmin = () => {
    const url = `http://localhost:5000/user/admin/${email}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(response => {
      if(response.status === 403){
        toast.error('Failed to make an admin');
      }
      return response.json();
    })
    .then(data => {
      if(data.modifiedCount > 0){
        toast.success('Make admin successful!');
        refetch();
      }
    })
  }
  return (
    <tr>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={handleAdmin} className='btn btn-xs'>Make Admin</button>}</td>
        <td><button className='btn btn-xs'>Remove User</button></td>
    </tr>
  );
};

export default UserRow;