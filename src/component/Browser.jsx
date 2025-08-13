import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Browser = () => {
  const navigate = useNavigate();

  // ✅ Your correct selector
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user?.uid) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user?.uid) {
    return <div className="text-white">Redirecting...</div>;
  }

  return (
    <>
      <Header />
      <div className="text-white p-8">
        <h1 className="text-2xl font-bold">Welcome to the Browser Page</h1>
        <p className="mt-4">
          You're signed in as {user.displayName || user.email}
        </p>
      </div>
    </>
  );
};

export default Browser;
