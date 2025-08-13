import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user =useSelector(store=>store.user);
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(!showNotification); 
  };

  const handleSignOut=()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
   navigate("/");
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  }

  return (
    <div>
 
  <header className="flex justify-between items-center w-full px-8 py-3  rounded-2xl z-10">
    
    <img
      className="w-44 h-16 pl-4"
      src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="Netflix logo"
    />

    
  { user && (  <div className="flex items-center space-x-4">
      
      <button onClick={handleNotificationClick} aria-label="Toggle notifications">
        <img
          className="w-12 h-12 rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-amber-500 transition"
          src="https://tse3.mm.bing.net/th/id/OIP.r5gQKjxiZEnnVnErniZOVQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
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
    <div className="mr-10 mt-3 text-right text-white text-2xl  px-4 py-2">
      No notifications recently!
    </div>
  )}
</div>

  );
};

export default Header;
