import { useEffect, useState } from "react";
import Login from "./screens/auth/login";
import Home from "./screens/home";

function App() {
  const [code, setCode] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      setCode(code);
    }
  }, []);

  return <div>{!code ? <Login /> : <Home />}</div>;
}

export default App;