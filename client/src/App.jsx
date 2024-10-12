import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Learning from "./components/Learning";
import Principal from "./components/Principal";
import Chat from "./components/Chat";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
