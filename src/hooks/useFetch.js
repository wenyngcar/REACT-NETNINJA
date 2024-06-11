import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /* Fetch API */
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        /* Response object */
        return res.json();
      })
      .then((data) => {
        /* Actual data after parsing the response object. */
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);
  /* Fire only once on render if dependencies is empty. */

  return { data, isPending, error };
};

export default useFetch;
