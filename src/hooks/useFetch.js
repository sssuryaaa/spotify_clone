import React, { useEffect, useState } from "react";
import { getOptions } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const useFetch = (url) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      const res = await fetch(url, getOptions());
      if (!res.ok) {
        // if (res.status === 401) {
        //   localStorage.clear();
        //   navigate("/");
        // }
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
