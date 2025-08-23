import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DEFAULT_PHOTO, LOGO, NOTIFY } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const user =useSelector(store=>store.user);
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(!showNotification); 
  };

  const handleSignOut=()=>{
   
    signOut(auth)
    .then(() => {
})
.catch((error) => {
  // An error happened.
  navigate("/error");
});
  };

  useEffect(() => {
  const unsubscribe= onAuthStateChanged(auth, (user) => {
  if (user) {
    const { uid, email, displayName, photoURL } = user;
    dispatch(
      addUser({
        uid,
        email,
        displayName: displayName || "Guest User",   // fallback
        photoURL: photoURL || 
          DEFAULT_PHOTO, // fallback avatar
      })
    );
    navigate("/browser");
  } else {
    dispatch(removeUser());
    navigate("/");
  }
});

    return()=>unsubscribe();
  }, []);


  return (
  <div className="absolute top-0 left-0 w-full z-20">
    <header className="flex justify-between items-center px-8 py-3">
    
    <img
      className="w-44 h-16 pl-4"
      src={LOGO}
      alt="Netflix logo"
    />

    
  { user && (  <div className="flex items-center space-x-4">
      
      <button onClick={handleNotificationClick} aria-label="Toggle notifications">
        <img
          className="w-12 h-12 rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-amber-500 transition"
          src={NOTIFY}
          alt="Notification icon"
        />
      </button>

      
      <div className="w-12 h-12 rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-amber-500 transition">
        <img
          className="w-full h-full object-cover"
          src={user?.photoURL}
          alt="User avatar"
        />
      </div>

      
      <button
        onClick={handleSignOut}
        className="px-4 py-2 rounded bg-red-600 text-white font-bold hover:bg-red-700 transition"
      >
        Sign out
      </button>
    </div>
  )}
  </header>

  
  {showNotification && (
    <div className="mr-10 mt-3 text-right text-amber-800 text-2xl  px-4 py-2">
      No notifications recently!
    </div>
  )}
</div>

  );
};

export default Header;
