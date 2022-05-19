
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import Navbar from "./components/Navbar"
import PrivateRoute from "./components/PrivateRoute"
import "react-toastify/dist/ReactToastify.css"
import CreateListing from "./screens/CreateListing"
import Explore from "./screens/Explore"
import Offers from "./screens/Offers"
import Category from "./screens/Category"
import Profile from "./screens/Profile"
import SignIn from "./screens/SignIn"
import SignUp from "./screens/SignUp"
import ForgotPassword from "./screens/ForgotPassword"
import Listing from "./screens/Listing"
import EditListing from "./screens/EditListing"

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element=
        {<ForgotPassword />} />
        <Route path="/create-listing" element=
        {<CreateListing />} />
        <Route path="/category/:categoryName/:listingId" element=
        {<Listing />} />
        <Route path="/edit-listings/listingId" element={<EditListing/>} />
      </Routes>
      <Navbar />
    </Router>

    <ToastContainer />
  </>
  )
  }
export default App;




