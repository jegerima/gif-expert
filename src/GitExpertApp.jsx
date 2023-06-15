import { useState } from 'react'
import { AddCategory, GifGrid } from './components';
import './GifExpertApp.css'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Sonic']);

    const onAddCategory = ( newCategory ) => {
      if( categories.includes(newCategory) ) return;
      setCategories([ newCategory, ...categories ]);
    }

    return (
      <>
        <h1>GiftExpertApp</h1>
        <AddCategory 
          onNewCategory={ (event) => onAddCategory(event) }
        />
        {
          categories.map( (category) => 
            <GifGrid 
              key={`c-${category}`} 
              category={category}
            />
          )
        }
      </>
    )
}