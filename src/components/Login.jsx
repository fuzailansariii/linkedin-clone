import React, { useState } from "react";
import LoginNav from "./LoginNav";
import { Link } from "react-router-dom";
import { auth } from "./myFirebase";
import { useDispatch } from "react-redux";
import { login } from "../features/users/userSlice";

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    email: "",
    password: "",
    photoURL: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handling login
  const loginHandler = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(loginData.email, loginData.password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.userName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
    setLoginData({
      userName: "",
      email: "",
      password: "",
      photoURL: "",
    });
  };

  //   handling join
  const joinHandle = () => {
    if (!loginData.userName) {
      return alert("Enter Your Full Name And Description!");
    }

    auth
      .createUserWithEmailAndPassword(loginData.email, loginData.password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: loginData.userName,
            photoURL: loginData.photoURL,
            email: loginData.email,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: loginData.userName,
                photoURL: loginData.photoURL,
              })
            );
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <LoginNav />

      <div className="flex mt-5 justify-evenly">
        <div className="w-[500px]">
          <h1 className="font-base font-quicksand text-4xl flex justify-center text-red-700">
            Welcome to your professional community
          </h1>
          <div className="mt-3">
            <form
              onSubmit={loginHandler}
              className="flex flex-col font-quicksand font-bold w-[400px]"
            >
              <div className="flex flex-col text-gray-600 w-[400px] mt-3">
                <label htmlFor="userName">Name</label>
                <input
                  className="h-10 rounded-md px-3 border-2 border-gray-500"
                  type="text"
                  id="userName"
                  name="userName"
                  value={loginData.userName}
                  required
                  onChange={handleChange}
                  autoComplete="on"
                />
                <div className="flex flex-col text-gray-600 w-[400px] mt-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={loginData.email}
                    required
                    onChange={handleChange}
                    autoComplete="on"
                    className="h-10 rounded-md px-3 border-2 border-gray-500"
                  />
                </div>

                {/* <div className="flex flex-col text-gray-600 w-[400px] mt-3">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="eg. Software Developer"
                    value={loginData.description}
                    onChange={handleChange}
                    autoComplete="on"
                    className="h-10 rounded-md px-3 border-2 border-gray-500"
                  />
                </div> */}
              </div>
              <div className="flex flex-col text-gray-600 w-[400px] mt-3">
                <label htmlFor="profileURL">
                  Profile picture URL {"(optional)"}
                </label>
                <input
                  type="text"
                  className="h-10 rounded-md px-3 border-2 border-gray-500"
                  id="profileURL"
                  name="photoURL"
                  value={loginData.photoURL}
                  onChange={handleChange}
                  autoComplete="on"
                />
              </div>

              <div className="flex flex-col text-gray-600 mt-3">
                <label htmlFor="password">Password</label>
                <input
                  className="h-10 rounded-md px-3 border-2 border-gray-500"
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  required
                  onChange={handleChange}
                  autoComplete="on"
                />
              </div>

              <div className="mt-2">
                <Link
                  to="forgetPassword"
                  className="mt-2 font-semibold text-blue-800 cursor-pointer hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-900 text-white rounded-full w-full py-3"
                >
                  Sign in
                </button>
                <button
                  onClick={joinHandle}
                  className="bg-transparent font-semibold hover:bg-gray-100 text-gray-800 rounded-full border-gray-500 border w-full py-2 mt-4 mb-10"
                >
                  New to LinkedIn? Join now
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex justify-center items-center w-[700px]">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
            alt="login"
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
