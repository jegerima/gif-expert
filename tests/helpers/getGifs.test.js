import { getGifs } from "../../src/helpers/getGifs"

describe('Test getGifs helper', () => {
  test('Should return an array of gifs', async() => {
    const gifs = await getGifs('Sonic');
    expect(gifs.length).toBeGreaterThan( 0 );
    expect( gifs[0] ).toEqual({
      title: expect.any(String),
      url: expect.any(String),
      id: expect.any(String),
    });
  })
})