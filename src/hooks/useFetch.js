import React, { useEffect, useState } from "react";
import { OPTIONS } from "../utils/constants";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
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
      setError(null);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      setData(null);
    }
  };

  return { data, loading, error };
};

export default useFetch;
