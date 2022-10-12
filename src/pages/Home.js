import { useQuery } from "react-query";
import SongTable from "../components/SongTable";

function Home() {
  const fetchAllSongs = async () =>
    await (await fetch("http://localhost:3000/songs")).json();
  const { data, error, status } = useQuery("songs", fetchAllSongs);

  return (
    <div className="container">
      {status === "error" && <div>{error.message}</div>}

      {status === "loading" && <div>Loading...</div>}

      {data && <SongTable songs={data} />}
    </div>
  );
}

export default Home;
