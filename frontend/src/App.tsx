import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listing from "pages/Listing";
import Form from "pages/Form";

function App() {
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Listing/>} />
      <Route path="form/:movieId" element={<Form/>} />
    </Routes>
  </BrowserRouter>);
}

export default App;
