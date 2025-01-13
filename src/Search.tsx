import { useContext, useState } from "react";
import { AlbumContext } from "./AlbumContext";

export default function Search() {
  const { fetchedAlbums, setSearchedAlbums, searchedAlbums } =
    useContext(AlbumContext);
  const [term, setTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setTerm("");

    setSearchedAlbums(
      fetchedAlbums.filter((album) =>
        album["im:artist"].label.toLowerCase().includes(term.toLowerCase()),
      ),
    );
    setHasSearched(true);
  };

  const handleInputChange = (e) => {
    setTerm(e.target.value);
    setHasSearched(false);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)}>
        <div className="search-container">
          <label htmlFor="search">Search for an Artist</label>
          <input
            type="text"
            name="search"
            value={term}
            onChange={(e) => handleInputChange(e)}
            placeholder="Artist Name"
            id="search"
          />
          <button>Search</button>
          <button onClick={() => setSearchedAlbums([])}>Clear</button>
        </div>
        <div className="search-error-container">
          {hasSearched && searchedAlbums.length === 0 && (
            <p className="search-error">No Results</p>
          )}
        </div>
      </form>
    </div>
  );
}
