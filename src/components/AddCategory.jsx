import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (evt) => {
    setInputValue(evt.target.value);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    const newValue = inputValue.trim();
    if( newValue.length <= 1 ) return;
    //setCategories( categories => [inputValue, ...categories]);
    onNewCategory( newValue );
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        placeholder="Search Gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}