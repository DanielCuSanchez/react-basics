import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    errr: null,
  });
  useEffect(() => {
    return () => {
      isMounted.current = false;
      console.log("isMounted", isMounted.current);
    };
  }, []);
  useEffect(() => {
    setState({
      ...state,
      loading: true,
    });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            errr: null,
            data,
          });
        } else {
          console.log("isMounted is false");
        }
      });
  }, [url, state]);

  return state;
};
