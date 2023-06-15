import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Test <GifGrid /> component', () => {
  const category = 'Smash Bros';
  
  test('Should display loading message', () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true
    });

    render( <GifGrid category={category} />);
    const h2 = screen.getByRole('heading', { level: 2});
    expect(h2).toBeTruthy();
    expect( screen.getByText(category) ).toBeTruthy();
  });

  test('Should display gifs when fetchGifs is ready', () => {
    useFetchGifs.mockReturnValue({
      gifs: [{
        id: 'ABCDEF',
        url: 'https://jegerima.dev',
        title: 'Jefferson Rivera'
      }],
      isLoading: false
    });

    render( <GifGrid category={category} />);
    expect( screen.getAllByRole('img').length ).toBeGreaterThanOrEqual(1);
    
  })
});