import React from 'react';
import { useGlobalContext } from './context.js';
import Info_user from './Info_user.js';
import Loading from './Loading.js';
import Navbar from './Nabar.js';
import Search from './Search.js';
import Followers from './Followers.js';
import UserCard from './UserCard.js';
import Fusionchart from './Fusionchart.js';
import Repos from './Repos.js';
function User() {
  const { loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  } else {
    return (
      <main>
        <Navbar />
        <Search />
        <Info_user />
        <div className='card_parent'>
          <UserCard />
          <Followers />
        </div>
        <Repos />
      </main>
    );
  }
}
export default User;
