import Array_Follower from './Array_Follower';
import { useGlobalContext } from './context';

function Followers() {
  const { follower } = useGlobalContext();
  const { login, avatar_url, id } = follower;
  console.log(follower);
  return (
    <main>
      <br />
      <br />
      <div className='card_component'>
        <div className='follower_nav'>Followers</div>
        <section className='card_container follower_container'>
          <div className='other_info follower_info'>
            {follower.map((item) => {
              return <Array_Follower key={item.id} {...item} />;
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
export default Followers;
