import React from 'react';
import { useHttp } from "../hooks/http.hook";

export const Check = () => {
  const { loading, error, request } = useHttp();
  return(
    <div>
      <h1>123123123124124124124</h1>
      <h3>{error}</h3>
    </div>
  )
}
