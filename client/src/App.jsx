import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Learning from "./components/Learning";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Learning />} />
          <Route path="/Loading" element={<Loading />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
