// import Body from "./components/Body";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />}  />
        <Route  path="/browse" element={<Browse/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
