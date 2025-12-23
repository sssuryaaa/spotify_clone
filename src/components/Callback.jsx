import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAccessToken } from "../auth/token";

export default function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      getAccessToken(code).then(() => {
        navigate("/");
      });
    }
  }, []);

  return <h2>Logging you in...</h2>;
}
