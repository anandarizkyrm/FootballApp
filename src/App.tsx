import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LiveScore from "./components/LiveScore/LiveScore";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livescore" element={<LiveScore />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
