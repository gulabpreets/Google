import React, { useState } from 'react';
import G from './images/g.png';
import Search from './images/search.png';
import Line from './images/line.png';
import Close from './images/close.png';
import './Style/NavStyle.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '../../action';

const NavSearch = () => {
  const dispatch = useDispatch();
  const [userQuery, setUserQuery] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUserQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiKey = 'AIzaSyCBDDdL7j75EwWHIhah6YhU5eExqrwqpTQ'; // Replace with your actual API key
    const cx = '706a9fefdd3fe4009'; // Replace with your actual CX value

    try {
      const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${userQuery}`);
      console.log("try", response.data);
      setResults(response.data.items);
      setError(null);
      // Dispatch the action to update the search results in Redux
      dispatch(setSearchResults(response));
      console.log("result", response.data.items);
    } catch (error) {
      setResults(null);
      setError('An error occurred while fetching the data.');
    }
  };

  const clearBox = () => {
    setUserQuery(''); // Clear the userQuery state
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="searchbar relative flex items-center w-full mx-auto sm:w-64 md:w-80 lg:w-96">
        <input
          type="text"
          value={userQuery}
          onChange={handleChange}
          placeholder="Search Google 2.0"
          className="w-full border border-black rounded-full py-2 px-4 pl-10 pr-10 focus:outline-none focus:border-blue-500 text-black"
        />
        <div className="absolute top-2 left-2">
          <img src={G} alt="Google Logo" className="h-6 w-6" />
        </div>
        <div className="absolute top-3.4 right-3.5">
          <img src={Close} alt="close icon" className="h-4 w-4" onClick={clearBox} style={{ cursor: 'pointer' }} />
        </div>
        <div className="absolute top-2 right-10">
          <img src={Line} alt="line" className="h-6" />
        </div>
        <button type='submit' className="searchGlass absolute top-2">
          <img src={Search} alt="search logo" className="h-6 w-6" style={{ cursor: 'pointer' }} />
        </button>
      </div>
    </form>
  );
};

export default NavSearch;
