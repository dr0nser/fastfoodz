import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return <></>;
};

export default Auth;
