import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async (url) => {};

  return { data, loading, error };
};

export default useFetch;
