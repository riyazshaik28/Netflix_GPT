import { useState } from "react";
import Header from "./Header";
const Login = () => {

  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm=()=>{
setisSignInForm(!isSignInForm);
  }
  return (
    <>
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login Form */}
      <form className="absolute w-3/12 min-w-[320px] p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-xl shadow-xl">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">{isSignInForm?"Sign In":"Sign Up"}</h2>
         {!isSignInForm && (
  <input
    type="text"
    placeholder="Full Name"
    className="w-full p-3 mb-4 rounded bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
  />
)}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 rounded bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded"
        >
         {isSignInForm?"Sign In":"Sign up"} 
        </button>
        <p className="text-amber-50 font-light text-center m-10 cursor-pointer hover:underline" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix?Sign up now.":"Already registered? sign In now"}</p>
      </form>
    </>
  );
};

export default Login;
