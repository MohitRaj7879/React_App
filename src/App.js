import Home from "./Main/Home";
import Contact from "./Main/Contact";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Main/PageNotFound";
function App() {
  return (
    <>
      <Routes initial>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
    </>
  );
}

export default App;
