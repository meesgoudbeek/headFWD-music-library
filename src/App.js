import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="playlist/create" />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
