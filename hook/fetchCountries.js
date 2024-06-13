import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://10.0.2.2:5003/api/countries');

      setCountries(response.data);
      console.log("The response is", response.data);
    } catch (err) {
      console.log('Error fetching data:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { countries, isLoading, error, refetch };
};

export default useFetchCountries;


// 'http://10.0.2.2:5003/api/countries'