import { useEffect, useState } from 'react';

export type Method = 'POST' | 'GET';

export type Params<T> = {
  method: Method;
  url: string;
  initialize?: boolean;
  onSuccess?: (response: T) => void;
};

export function useFetch<T>({ method, url, initialize, onSuccess }: Params<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [response, setResponse] = useState<T | null>(null);

  const request = async (body?: Record<string, unknown>) => {
    setIsLoading(true);
    setError('');
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const res = await fetch(`${import.meta.env.VITE_API_URL}/${url}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : null,
      });

      if (!res.ok) {
        setError(`Failed to fetch, ${method}:${url}`);
        setResponse(null);
        setIsLoading(false);
        return;
      }

      const response = (await res.json()) as T;
      setResponse(response);
      onSuccess?.(response);
      setIsLoading(false);
    } catch (error) {
      setError(`Failed to fetch ${method}:${url}`);
      setIsLoading(false);
    }
  };

  const reset = () => {
    setResponse(null);
  };

  useEffect(() => {
    if (initialize) {
      request().catch((error: unknown) => {
        console.error(error);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialize]);

  return {
    isLoading,
    error,
    response,
    request,
    reset,
  };
}
