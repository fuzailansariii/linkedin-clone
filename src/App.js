import Feed from "./components/Feed";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Error from "./components/Error";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./features/users/store";
import { login, logout, selectUser } from "./features/users/userSlice";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./components/myFirebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.profilePic,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Provider store={store}>
      {!user ? (
        <Routes>
          <Route index element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      ) : (
        <div className="flex flex-col bg-[#f3f2ef]">
          <Header />
          <div className="flex justify-center mt-5">
            <div className="max-w-[1280px] mx-[20px] flex space-x-5">
              <LeftSidebar />
              <Feed />
              <RightSidebar />
            </div>
          </div>
        </div>
      )}
    </Provider>
  );
}

export default App;
