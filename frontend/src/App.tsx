import Navbar from "components/Navbar";
import Listing from "page/Listing";
import Form from "page/Form";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Listing />} />
      <Route path="/form">
        <Route path=":movieId" element={<Form />} />
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
