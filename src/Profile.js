import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className='profile_info'>
        <img src={user.picture} alt={user.name} className='profile_img' />
        <h2 className='profile_name'>
          <span className='wlcm'>Welcome,</span> {user.name}
        </h2>
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};

export default Profile;
