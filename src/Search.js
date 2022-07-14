import { BiSearch } from 'react-icons/bi';
import { useGlobalContext } from './context';
function Search() {
  const { query, setquery } = useGlobalContext();
  let name = query;
  function handlesubmit(event) {
    event.preventDefault();
    setquery(name);
  }
  return (
    <main>
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
      <br />
    </main>
  );
}
export default Search;
