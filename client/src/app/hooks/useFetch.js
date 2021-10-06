import { useState, useEffect } from 'react';

const useFetch = ( api ) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          setError('There is a problem! Check the API');
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch(err) {
        setError(err)
      } finally {
        setIsloading(false);
      }
    }

    getData();
  }, [api]);
  
  return [data, isLoading, error]
}

export default useFetch;
