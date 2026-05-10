import { useNavigate, useLocation } from "react-router-dom";
import { CircleArrowLeft } from 'lucide-react';

const SmartBackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    // If user came from login or no history → go home
    if (
      window.history.length <= 2 || 
      location.pathname === "/home"
    ) {
      navigate("/home", { replace: true });
    } 
    
    else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className=" text-purple-300 "
    >
      <CircleArrowLeft />
    </button>
  );
};

export default SmartBackButton;