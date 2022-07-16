import { useGlobalContext } from './context';
import Info from './Info_user';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

function Navbar() {
  const { userdata } = useGlobalContext();
  return (
    <main>
      <nav className='navigation'>
        <Profile />
        <LogoutButton />
      </nav>
      <br />
      <br />
    </main>
  );
}
export default Navbar;
