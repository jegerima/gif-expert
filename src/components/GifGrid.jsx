import PropTypes from 'prop-types';
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <div aria-label='grid'>
      <h3>{ category }</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {
          gifs.map( gif => (
            <GifItem 
              key={gif.id} 
              //gif={gif}
              { ...gif } //Para esparcir todas las propiedades
            />
          )) 
        }
      </div>
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}