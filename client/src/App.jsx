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
          <Route path="/" element={<Learning />} />
          <Route path="/example" element={<Example />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
