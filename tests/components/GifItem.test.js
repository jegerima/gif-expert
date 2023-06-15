import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Test GifItem', () => {
  const url = 'http://jegerima.dev/';
  const title = 'Jegerima Avatar';

  test('Snapshot match', () => {
    const {container} = render( <GifItem url={url} title={title} /> );
    expect(container).toMatchSnapshot();
  });

  test('Should display an image with the appropiate URL and ALT', () => {
    render( <GifItem url={url} title={title} /> );
    //screen.debug();
    // expect( screen.getByRole('img').src ).toBe(url);
    const {src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  })

  test('Should display title as a text', () => {
    render( <GifItem url={url} title={title} /> );
    expect(screen.getByText(title)).toBeTruthy();
  })
});