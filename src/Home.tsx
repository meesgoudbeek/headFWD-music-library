import React from 'react';
import useFetch from './services/useFetch';
import Sidebar from './components/Sidebar';
import SongTable from './components/SongTable';

export const Home = () => {
  const url = 'http://localhost:3000/songs';
  const { response, loading, error } = useFetch(url);
  return (
    <div className="Home">
      <Sidebar />
      <div className="container">
        {loading && <p>Laden...</p>}
        {error && <p>Er ging iets mis</p>}
        {response && <SongTable songs={response} />}
      </div>
    </div>
  );
};
