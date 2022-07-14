import { MdLocationOn } from 'react-icons/md';
import { BiBuildings } from 'react-icons/bi';
import { FiLink2 } from 'react-icons/fi';
import { useGlobalContext } from './context';
function UserCard() {
  const { userdata } = useGlobalContext();
  const {
    name,
    company,
    blog,
    location,
    bio,
    twitter_username,
    avatar_url,
    html_url,
  } = userdata;
  return (
    <main>
      <br />
      <br />
      <div className='card_component'>
        <div className='user_nav'>User</div>
        <section className='card_container'>
          <br />
          <div className='card_profile'>
            <div className='name_info'>
              <img src={avatar_url} alt='image' className='card_img' />
              <div className='inner_profile'>
                <p className='text name_text'>{name}</p>@{twitter_username}
              </div>
            </div>
            <a href={html_url} className='link' target='_blank'>
              <button className='btn card_btn'>follow</button>
            </a>
          </div>
          <br />
          <br />
          <div className='other_info'>
            <div className='text bio'>{bio}</div>
            <br />
            <div className='geo_info'>
              <BiBuildings className='search_icon' />
              <span className='text info_text'>{company}</span>
            </div>
            <div className='geo_info'>
              <MdLocationOn className='search_icon' />
              <span className='text info_text'>{location}</span>
            </div>
            <div className='geo_info'>
              <FiLink2 className='search_icon' />
              <span className='text info_text link_text'>
                <a href={`https://${blog}`} target='_blank ' className='link'>
                  {blog}
                </a>
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
export default UserCard;
