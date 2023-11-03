// src/components/FetchComponent.js
import React, { useState, useEffect } from 'react';

export function FetchComponent({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, [url]);

  if (!data) return <div>Loading...</div>;
  return <h1>{data.greeting}</h1>;
}
