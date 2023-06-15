import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifsFroAPI = async() => {
    const newGifs = await getGifs( category );
    setGifs( newGifs );
    setIsLoading(false);
  }

  useEffect( () => { 
    getGifsFroAPI();
  }, []);

  return { gifs, isLoading}
}