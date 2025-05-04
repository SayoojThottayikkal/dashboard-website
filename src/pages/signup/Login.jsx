import React, { useContext, useState } from "react";
import img from "../../assets/Images/img1.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../../app/context/store";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [enabled, setEnabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");
      dispatch({
        type: "UPDATE_USER_DATA",
        user_data: {
          userDetails: {
            isLogin: true,
          },
        },
      });
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please check credentials.");
    }
  };

  return (
    <div className="min-h-screen flex ">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="w-1/2 hidden lg:flex items-center justify-center bg-black relative">
        <img
          src={img}
          alt="Dashboard visual"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-sm tracking-widest uppercase text-gray-300 mb-2">
            Inspired by the future:
          </p>
          <h1 className="text-3xl font-bold tracking-wide">
            THE VISION UI DASHBOARD
          </h1>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#0F172A] px-6 py-12">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-white">
            <h1 className="text-2xl font-bold">Nice to see you!</h1>
            <p className="text-sm text-gray-400 mt-1">
              Enter your email and password to sign in
            </p>
          </div>

          <form className="space-y-4" onSubmit={login}>
            <div>
              <label htmlFor="email" className="block text-sm text-white mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#1E293B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm text-white mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#1E293B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex items-center space-x-3">
              <button
                type="button"
                role="switch"
                aria-checked={enabled}
                onClick={() => setEnabled(!enabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                  enabled ? "bg-blue-600" : "bg-gray-400"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${
                    enabled ? "translate-x-5" : "translate-x-1"
                  }`}
                />
              </button>
              <span className="text-white text-sm font-medium">
                Remember me
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition cursor-pointer"
            >
              SIGN IN
            </button>
          </form>

          <p className="text-center text-sm text-white">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-blue-400 font-medium hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
