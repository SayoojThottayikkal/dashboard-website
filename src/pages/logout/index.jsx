import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useContext } from "react";
import { Context } from "../../app/context/store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaSignInAlt } from "react-icons/fa";

export default function LogoutButton() {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch({
        type: "UPDATE_USER_DATA",
        user_data: {
          userDetails: {
            isLogin: false,
          },
        },
      });
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed. Try again.");
    }
  };

  return (
    <div className="flex justify-start items-center gap-2">
      <div className="">
        <FaSignInAlt />
      </div>
      <button
        onClick={handleLogout}
        className="bg-blue-950 text-white px-2  py-2 rounded hover:bg-red-700 transition cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}
