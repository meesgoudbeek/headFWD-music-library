import { useState } from "react";
import { Input, InputAdornment } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";

function SongTable({ songs }) {
  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? songs
    : songs.filter((song) => {
        return Object.values(song)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });

  const rows = filtered.map((song, index) => (
    <tr key={index}>
      <td>{song.id}</td>
      <td>{song.name}</td>
      <td>{song.artist}</td>
      <td>{song.year}</td>
      <td>{song.album}</td>
      <td>
        <button>
          <FavoriteIcon />
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <Input
        placeholder="Zoeken..."
        value={search}
        onChange={handleSearchChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Artist</th>
            <th>Year</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}

export default SongTable;
