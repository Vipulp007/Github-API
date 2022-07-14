function Array_Follower(item) {
  const { avatar_url, login, html_url } = item;
  return (
    <main>
      <br />
      <div className='geofollower_info'>
        <img src={avatar_url} alt='image' className='card_img follower_img' />
        <div className='text info_text follower_text'>
          {login}
          <div className='git_url'>
            <a href={html_url} className='url_follower' target='_blank'>
              {html_url}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Array_Follower;
