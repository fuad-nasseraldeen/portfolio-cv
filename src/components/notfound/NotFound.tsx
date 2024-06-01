import { memo } from 'react';
import React, { useState, useEffect } from 'react'
import './NotFound.css';

const NotFound = ({ message }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate an asynchronous operation (e.g., API request) after 2 seconds
    const fetchData = async () => {
      try {
        // Simulate an asynchronous operation (replace with your actual code)
        await new Promise(resolve => setTimeout(resolve, 30000));

        // Set loading to false after the asynchronous operation
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error if needed
        setLoading(false); // Set loading to false in case of an error
      }
    };

    // Call the fetchData function
    fetchData();
  }, [loading]); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div className='container__notFound'>
      {!loading && <h2 className='notFoundMsg'>{message}</h2>}
    </div>
  );
}

export default memo(NotFound);
