import { useGlobalContext } from './context';
import Info from './Info_user';

function Navbar() {
  const { userdata } = useGlobalContext();
  return (
    <main>
      <nav className='navigation'>
        <h1>welcome {userdata.login} </h1>
      </nav>
      <br />
      <br />
    </main>
  );
}
export default Navbar;
