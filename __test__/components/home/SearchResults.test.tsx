import { render, screen } from '@testing-library/react';
import SearchResults from '@components/home/SearchResults';

describe('SearchResults', () => {
  const items = [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
      },
      followers: {
        href: null,
        total: 30857540
      },
      genres: [
        "dance pop",
        "pop",
        "post-teen pop"
      ],
      href: "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU",
      id: "4IWBUUAFIplrNtaOHcJPRM",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebba56f45d45483d8f1a30a58b",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174ba56f45d45483d8f1a30a58b",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178ba56f45d45483d8f1a30a58b",
          width: 160
        }
      ],
      name: "James Arthur",
      popularity: 92,
      type: "artist",
      uri: "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
    }
  ];

  it('renders the items', () => {
    render(<SearchResults items={items} setResultsOpen={() => { }} />);
    const itemNames = screen.getAllByText(/James/);
    expect(itemNames).toHaveLength(items.length);
  });

  // it('sets the results to closed when blurred', () => {
  //   const setResultsOpen = jest.fn();
  //   render(<SearchResults items={items} setResultsOpen={setResultsOpen} />);
  //   const resultsList = screen.getByRole('list');
  //   resultsList.blur();
  //   expect(setResultsOpen).toHaveBeenCalledWith(false);
  // });
  //
  it('navigates to the artist page when an item is clicked', () => {
    render(<SearchResults items={items} setResultsOpen={() => { }} />);
    const itemLink = screen.getByAltText('James Arthur');
    itemLink.click();
    expect(window.location.pathname).toBe('/playlist/4gzpq5DPGxSnKTe4SA8HAU');
  });
});
