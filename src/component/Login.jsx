import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { checkvalidData } from "../utils/validation";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const dispatch =useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkvalidData(
      email.current?.value,
      password.current?.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
      displayName: name.current?.value,
       photoURL: "https://avatars.githubusercontent.com/u/180375075?v=4"
})
.then(() => {

const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL,
          })
        );

  navigate("/browser");
  // ...
})
.catch((error) => {
  setErrorMessage(error.message);
  // ...
});

          
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setErrorMessage("This email is already registered. Please sign in instead.");
          } else {
            setErrorMessage(error.message);
          }
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed in:", user);
          setErrorMessage(null);
          navigate("/browser");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setErrorMessage(null); 
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />

      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 min-w-[320px] p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-xl shadow-xl"
      >
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 rounded bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 rounded bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {errorMessage && (
          <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>
        )}

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-white font-light text-center mt-6 cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In now"}
        </p>
      </form>
    </>
  );
};

export default Login;