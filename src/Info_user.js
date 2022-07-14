import { useGlobalContext } from './context';
import { GoGist, GoRepo } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
function Info_user() {
  const { userdata } = useGlobalContext();
  const { public_gists, public_repos, followers, following, login } = userdata;
  return (
    <main>
      <br />
      <div className='follow_info'>
        <div className='container_info'>
          <div className='icon i1'>
            <GoRepo />
          </div>
          <div className='info'>
            <h2>{public_repos}</h2>
            <div className='text'>repos</div>
          </div>
        </div>
        <div className='container_info'>
          <div className='icon i2'>
            <FiUsers />
          </div>
          <div className='info'>
            <h2>{followers}</h2>
            <div className='text'>follower</div>
          </div>
        </div>
        <div className='container_info'>
          <div className='icon i3'>
            <FiUserPlus />
          </div>
          <div className='info'>
            <h2>{following}</h2>
            <div className='text'>following</div>
          </div>
        </div>
        <div className='container_info'>
          <div className='icon i4'>
            <GoGist />
          </div>
          <div className='info'>
            <h2>{public_gists}</h2>
            <div className='text'>gists</div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Info_user;
