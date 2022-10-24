import React, { useState, useRef, useEffect } from 'react';
import Modal from './Modal';
import Succes from './Succes';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import ListIcon from '@mui/icons-material/List';

function Sidebar() {
  // eslint-disable-next-line
  const defaultPlaylist = { home: new Set(), favorites: new Set() };
  const [sidebarState, setSidebarState] = useState({
    currentPlaylist: 'home',
    modal: false,
    playlists: defaultPlaylist,
    succes: ''
  });

  const playlistRef = useRef<any>(null);
  const playlists = Object.keys(sidebarState.playlists);

  const data = JSON.parse(
    localStorage.getItem('MUSIC_LIBRARY_APP') || '{"home":{},"favorites":{}}'
  );

  const addPlaylist = (e) => {
    e.preventDefault();
    const list = playlistRef.current.value;

    setSidebarState({
      ...sidebarState,
      modal: false,
      playlists: { ...sidebarState.playlists, [list]: new Set() },
      succes: 'Playlist succesvol aangemaakt!'
    });
  };

  useEffect(() => {
    !data
      ? localStorage.setItem('MUSIC_LIBRARY_APP', JSON.stringify(defaultPlaylist))
      : setSidebarState({ ...sidebarState, playlists: data }); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    data
      ? localStorage.setItem('MUSIC_LIBRARY_APP', JSON.stringify(sidebarState.playlists))
      : localStorage.setItem('MUSIC_LIBRARY_APP', JSON.stringify(defaultPlaylist));
  }, [sidebarState.playlists, data, defaultPlaylist]);

  const handleModal = () => setSidebarState({ ...sidebarState, modal: !sidebarState.modal });
  const handleSucces = () => setSidebarState({ ...sidebarState, succes: '' });

  return (
    <div className="Sidebar">
      <h3 className="logo">HEADFWD</h3>
      <ul className="SideBarList">
        {playlists.map((list) => (
          <li
            key={list}
            className="row"
            onClick={() => {
              setSidebarState({ ...sidebarState, currentPlaylist: list });
            }}>
            <div className="icon">
              <ListIcon />
            </div>
            <div data-testid="list" className="title">
              {list}
            </div>
          </li>
        ))}
        <li className="row" onClick={handleModal}>
          <div className="icon">
            <PlaylistAddIcon />
          </div>
          <div className="title">Nieuwe Playlist</div>
        </li>
      </ul>
      <Modal show={sidebarState.modal} close={handleModal}>
        <form onSubmit={addPlaylist}>
          <div className="title">Nieuwe Playlist</div>

          <div className="contentWrap">
            <input type="text" placeholder="Mijn Playlist" required ref={playlistRef} />

            <br />

            <button type="submit">Aanmaken</button>
          </div>
        </form>
      </Modal>
      <Succes succes={sidebarState.succes} close={handleSucces} />
    </div>
  );
}

export default Sidebar;
