import { useEffect, useState } from "react";
import Login from "./screens/auth/login";
import Home from "./screens/home";
import { getToken, setClientToken } from "./spotify"; // ✅ added

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    console.log("CODE:", code);

    if (code) {
      getToken(code).then((data) => {
        console.log("TOKEN DATA:", data);

        if (data.access_token) {
          localStorage.setItem("access_token", data.access_token);
          setToken(data.access_token);

          setClientToken(data.access_token); // ⭐ IMPORTANT

          // clean URL
          window.history.replaceState({}, document.title, "/");
        } else {
          console.error("Token error:", data);
        }
      });
    } else {
      const savedToken = localStorage.getItem("access_token");
      if (savedToken) {
        setToken(savedToken);
        setClientToken(savedToken); // ⭐ IMPORTANT
      }
    }
  }, []);

  return <div>{!token ? <Login /> : <Home />}</div>;
}

export default App;