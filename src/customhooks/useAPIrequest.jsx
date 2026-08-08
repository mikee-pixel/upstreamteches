import {useState, useEffect} from "react";

const useAPIrequest = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
      try {
        //initiate fetch request
        const response = await fetch(url);
        //check if fetch request is ok. If not then return a error message.
        if (!response.ok) {
          throw new Error(`HTTP request: ${response.status}`);
        }
        //convert the fetch data to JSON format.
        const data_result = await response.json();
        //assign the fetch data to state.;
        setData(data_result);
      } catch (err) {
        //this block will be execute if the fetch request failed.
        setLoading(false)
        setErrorMessage(err);        
      } finally {
        //this block will be executed until the fetch request complete.
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {data, loading, errorMessage};

}

export default useAPIrequest;