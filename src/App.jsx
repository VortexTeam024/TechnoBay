import { Route, Outlet, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import ProductDetails from "./components/pages/ProductDetails";
import Wishlist from "./components/pages/Wishlist";
import Cart from "./components/pages/Cart";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgetPassword from "./components/pages/ForgetPassword";
import VerifyCode from "./components/pages/VerifyCode";
import NewPassword from "./components/pages/NewPassword";
import CategoryDetails from "./components/pages/CategoryDetails";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import ProductProvider from "./components/providers/Products.provider";
import NotFound from "./components/pages/NotFound";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const App = () => {
  const Router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/category/:category" element={<CategoryDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/verify-code" element={<VerifyCode />} />
      <Route path="/reset-password" element={<NewPassword />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ));

  return (
    <ProductProvider>
      <RouterProvider router={Router} />
      <ToastContainer />
    </ProductProvider>
  );
};

export default App;
