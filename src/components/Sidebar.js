import { useState, useRef, useContext } from "react";
import { SidebarData } from "./SidebarData";
import { Divider } from "@mui/material";
import Modal from "./Modal";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ListIcon from "@mui/icons-material/List";

function Sidebar() {
  const [sidebarState, setSidebarState] = useState({
    currentPlaylist: "home",
    modal: false,
    playlists: {},
  });

  const playlistRef = useRef(null);
  const playlists = Object.keys(sidebarState.playlists);

  const addPlaylist = (e) => {
    e.preventDefault();
    const list = playlistRef.current.value;

    setSidebarState({
      ...sidebarState,
      modal: false,
      playlists: { ...sidebarState.playlists, [list]: new Set() },
    });
  };

  return (
    <div className="Sidebar">
      <h3 className="logo">HEADFWD</h3>
      <ul className="SideBarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div className="icon">{val.icon}</div>
              <div className="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
      <div className="divider" />
      <ul className="SideBarList">
        <li
          className="row"
          onClick={() => {
            setSidebarState({ ...sidebarState, modal: true });
          }}
        >
          <div className="icon">
            <PlaylistAddIcon />
          </div>
          <div className="title">Nieuwe Playlist</div>
        </li>
        {playlists.map((list) => (
          <li
            key={list}
            className="row"
            onClick={() => {
              setSidebarState({ ...sidebarState, currentPlaylist: list });
            }}
          >
            <div className="icon">
              <ListIcon />
            </div>
            <div className="title">{list}</div>
          </li>
        ))}
      </ul>
      <Modal
        show={sidebarState.modal}
        close={() => {
          setSidebarState({ ...sidebarState, modal: false });
        }}
      >
        <form onSubmit={addPlaylist}>
          <div className="title">Nieuwe Playlist</div>

          <div className="contentWrap">
            <input
              type="text"
              placeholder="Mijn Playlist"
              required
              ref={playlistRef}
            />

            <br />

            <button type="submit">Aanmaken</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Sidebar;
