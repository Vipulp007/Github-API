import { BiSearch } from 'react-icons/bi';
import { useGlobalContext } from './context';
function Search() {
  const { query, setquery, request } = useGlobalContext();
  let name = query;
  function handlesubmit(event) {
    event.preventDefault();
    setquery(name);
  }
  return (
    <main className='search_req'>
      <br />
      <br />
      <div className='serch_bar'>
        <form action='' className='search_form'>
          <BiSearch className='search_icon' />
          <input
            type='text'
            name='name'
            id=''
            placeholder='Enter Github User'
            className='search_box'
            val={query}
            onChange={(e) => (name = e.target.value)}
            autoComplete='off'
          />
        </form>
        <button type='submit' className='btn search_btn' onClick={handlesubmit}>
          search
        </button>
      </div>
      <div className='request text'>
        Requests : {request.remain} / {request.limit}
      </div>
      <br />
    </main>
  );
}
export default Search;
