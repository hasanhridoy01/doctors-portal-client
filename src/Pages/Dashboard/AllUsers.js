import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {

  //use React Query
  const {data: users, isLoading, refetch} = useQuery(['available', ], () => fetch(`http://localhost:5000/user`, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    } 
  })
  .then(response => response.json())
  )
  
  //if loading
  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <h3>alluser: {users.length}</h3>
      <div class="overflow-x-auto">
        <table class="table w-full">
            <thead>
                <tr>
                    <th>email</th>
                    <th>Admin</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => <UserRow key={user._id} user={user} refetch={refetch}></UserRow>)
                }
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;