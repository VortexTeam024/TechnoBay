import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Laptops from "./components/pages/categories/Laptops";
import Mobiles from "./components/pages/categories/Mobiles";
import Television from "./components/pages/categories/Television";
import SmartWatch from "./components/pages/categories/SmartWatch";
import Tablet from "./components/pages/categories/Tablet";
import Earphone from "./components/pages/categories/Earphone";
import Camera from "./components/pages/categories/Camera";
import Accessory from "./components/pages/categories/Accessory";
import ProductDetails from "./components/pages/ProductDetails";
import Login from "./Login";
import './Login.css';
const App = () => {
  return (<>
  <Login/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laptop" element={<Laptops />} />
        <Route path="/mobile" element={<Mobiles />} />
        <Route path="/television" element={<Television />} />
        <Route path="/smart-watch" element={<SmartWatch />} />
        <Route path="/tablet" element={<Tablet />} />
        <Route path="/earphone" element={<Earphone />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/accessory" element={<Accessory />} />
        <Route path="/1234dsa/details" element={<ProductDetails />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;