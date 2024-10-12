import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Example from "./components/Example";
import Learning from "./components/Learning";
import Principal from "./components/Principal";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/learning" element={<Learning />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
