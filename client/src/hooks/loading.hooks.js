import {useState, useCallback} from 'react';

export const useLoading = ()  => {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => setLoading(false);
  const startLoading = () => setLoading(true);

  return { loading, finishLoading, startLoading }
}
