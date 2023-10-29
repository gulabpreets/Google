import React, { useState, useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const Results = () => {
  const [results, setResults] = useState([]);
  const response = useSelector((state) => state.search.searchResults);

  useEffect(() => {
    if (response && response.data) {
      setResults(response.data.items);
    }
  }, [response]);

  if (!response) {
    return (
      <div className='flex flex-col items-center justify-center '>
        <Audio
          height={80}
          width={80}
          radius={9}
          color="green"
          ariaLabel="loading"
          wrapperStyle={{}} // Add appropriate styles here
          wrapperClass="" // Add appropriate CSS classes here
        />
          <h1 style={{ marginTop: '20px', fontSize:'17px' }}>Type your query in searchbar</h1>
          <h1 style={{ fontSize:'17px' }}>Then press enter or click on search icon to get results.</h1>
      </div>
    );
  }

  if (results.length > 0) {
    return (
      <ul style={{padding:'10px', width:'100%', height:'100%'}}>
        {results.map((item, index) => (
          <li key={index}>
            <a style={{fontSize:'25px', color:'#8bb4f9'}} href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <p>{item.snippet}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return <div>No results found.</div>;
  }
};

export default Results;
