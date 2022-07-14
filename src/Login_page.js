import React from 'react';
import Image from './github_user.jpg';
import { Link } from 'react-router-dom';
function Login_page() {
  return (
    <main>
      <section className='parent_login'>
        <img src={Image} alt='login_image' className='login_img' />
        <h1 className='git_text'>Github User</h1>
        <Link to='/user' className='btn'>
          log in / sign up
        </Link>
      </section>
    </main>
  );
}
export default Login_page;
