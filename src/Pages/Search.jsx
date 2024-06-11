import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from '../Components/Header/Card'

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get('query');
    console.log('Initial queryParam:', queryParam); // Log the initial query parameter
    if (queryParam) {
      setQuery(queryParam);
    }
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        console.log('Fetching items with query:', query); 
        const response = await axios.get('https://recipe-heaven-backend.vercel.app/api/items/search', {
          params: { q: query },
        });
        setResults(response.data);
      } catch (err) {
        console.error('Error fetching items:', err); 
        setError(err.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    // navigate(`/search?query=${e.target.value}`);
  };

  return (
    <div className='px-6 py-20'>
      <h1 className='text-center text-3xl py-10 font-semibold text-secondary'>Search</h1>
      <div className='p-4 rounded relative flex items-center bg-slate-200 gap-3'>
        <FaSearch className='h-5' />
        <input
          value={query}
          onChange={handleSearch}
          className='h-5 w-[80%] text-xl bg-slate-200 outline-none'
          type='search'
          id='search' required=''
          placeholder='Search food recipes...'
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 gap-8">
        {results &&
          results.map((item) => (
            <Card item={item} key={item._id}></Card>
          ))}
      </ul>
    </div>
  );
}

export default Search;
