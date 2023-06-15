const limit = 5;
const API_KEY = '8qj8IXCo3E66v6Dri1VGmkFStGq3hZVI';

export const getGifs = async( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${limit}&q=${category}`;
  const response = await fetch( url );
  if(response.ok){
    const {data} = await response.json()
    const gifs = data.map( (gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized.url
      })
    )
    return gifs;
  }
  return [];
}