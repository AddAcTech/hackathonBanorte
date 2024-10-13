import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Learning from "./components/Learning";
import Principal from "./components/Principal";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Examen from "./components/Examen";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/examen" element={<Examen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
