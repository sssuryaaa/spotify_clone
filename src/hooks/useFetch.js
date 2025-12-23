import React, { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constants";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      const res = await fetch(url, OPTIONS);
      if (!res.ok) {
        throw new Error("Error Occured: " + res.status);
      }
      const json = await res.json();
      setLoading(false);
      setData(json);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { data, loading, error };
};

export default useFetch;
