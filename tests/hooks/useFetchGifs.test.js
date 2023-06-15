import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// /jest.mock("../../src/hooks/useFetchGifs");

describe('Test useFetchGifs hook', () => {
  const category = 'Smash Bros';
  
  test('Should return initial state', () => {
    // Empty gifs, isLoading true
    const { result } = renderHook( () => useFetchGifs(category) );
    const { gifs, isLoading } = result.current;
  
    expect( gifs.length ).toBe( 0 );
    expect( isLoading ).toBeTruthy();

  });

  test('Should return an array of gifs and isLoading:false', async () => {
    // Empty gifs, isLoading true
    const { result } = renderHook( () => useFetchGifs(category) );

    await waitFor(
      () => expect( result.current.gifs.length ).toBeGreaterThan( 0 )
      ,
      { timeout: 2000 }
    );

    const { gifs, isLoading } = result.current;

    expect( gifs.length ).toBeGreaterThan( 0 );
    expect( isLoading ).toBeFalsy();
  });

});