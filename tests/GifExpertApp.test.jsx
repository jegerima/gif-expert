import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GitExpertApp";

describe('Test <GifExpertApp /> Component', () => {
  test('Initial state', () => {
    render(<GifExpertApp/>);
    expect( screen.getByLabelText('grid') ).toBeTruthy();
  });

  test('Render new category', () => {
    const category = 'Smash Bros';

    render(<GifExpertApp/>);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: category}});
    fireEvent.submit(form);

    expect( screen.getAllByLabelText('grid').length ).toBe(2);

  });

  test('No changes if same category is added', () => {
    const category1 = 'Smash Bros';
    const category2 = 'Smash Bros';

    render(<GifExpertApp/>);
  
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: category1}});
    fireEvent.submit(form);

    fireEvent.input(input, {target: {value: category2}});
    fireEvent.submit(form);

    expect( screen.getAllByLabelText('grid').length ).toBe(2);
  });
})