import { useEffect } from 'react';
import { useFetch } from './useFetch';
import { Choice } from '../types/choice';

export function useChoices() {
  const { isLoading, error, response, request, reset } = useFetch<Choice[]>({
    method: 'GET',
    url: 'choices',
  });

  useEffect(() => {
    request().catch((error: unknown) => {
      console.error(error);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    error,
    response,
    request,
    reset,
  };
}
