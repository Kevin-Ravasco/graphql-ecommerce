import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import SiteNavbar from "./Components/Navbar/Navbar"
import Login from "./Pages/Auth/Login"
import SignUp from "./Pages/Auth/SignUp"
import ResetPassword from "./Pages/Auth/ResetPassword"
import Container from "react-bootstrap/Container"
import Footer from "./Components/Footer/Footer"
import CartPage from "./Pages/CartPage"
import MyAccount from "./Pages/MyAccount"
import ProductsPage from "./Pages/ProductsPage"

function App() {
  return (
    <>
      <SiteNavbar />
      <Container fluid>
        <Routes>
          <Route path="/cart/" element={<CartPage />}></Route>
          <Route path="/products/" element={<ProductsPage />}></Route>
          <Route path="/my-account/" element={<MyAccount />}></Route>
          <Route path="/reset-password/" element={<ResetPassword />}></Route>
          <Route path="/sign-up/" element={<SignUp />}></Route>
          <Route path="/login/" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
