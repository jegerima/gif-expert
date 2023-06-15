import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Test AddCategory component', () => {
  const text = 'Smash Bros';

  test('Should change input text value', () => {
      render( <AddCategory onNewCategory={ () => {} }/>);
      const input = screen.getByRole('textbox');
      fireEvent.input(input, {target: {value: text}});
      expect(input.value).toBe(text);
      // screen.debug();
  });

  test('Submit button validation', () => {
    const onNewCategory = jest.fn();
    
    render( <AddCategory onNewCategory={ onNewCategory }/>);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: text}});
    fireEvent.submit(form );

    expect(input.value).toBe('');
    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( text );
  });

  test('Submit shoult not be called if input text is empty', () => {
    const onNewCategory = jest.fn();
    
    render( <AddCategory onNewCategory={ onNewCategory }/>);
    const form = screen.getByRole('form');
    fireEvent.submit(form );

    expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
    expect( onNewCategory ).not.toHaveBeenCalled();
  });
});