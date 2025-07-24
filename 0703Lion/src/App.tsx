import { Routes, Route } from "react-router-dom";
import "./App.scss";
import AuthLayout from "./Layout/AuthLayout";
import HomeLayout from "./Layout/HomeLayout";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Notice from "./pages/Notice";
import PostCreate from "./pages/PostCreate";
import Signup from "./pages/Signup";
import NepyeonAnswer from "./pages/NepyeonAnswer";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLayout><Main /></HomeLayout>} />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }
        />
        <Route path="/notice" element={<HomeLayout><Notice /></HomeLayout>} />
        <Route path="/postcreate" element={<HomeLayout><NepyeonAnswer /></HomeLayout>} />
        <Route path="/write-post" element={<HomeLayout><PostCreate /></HomeLayout>} />
        <Route path="/post/:id" element={<HomeLayout><PostDetail /></HomeLayout>} />
      </Routes>
    </div>
  );
}

export default App;
