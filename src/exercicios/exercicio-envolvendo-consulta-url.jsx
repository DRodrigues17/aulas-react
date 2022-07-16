//import "./styles.css";
import React from "react";
import axios from "axios";

export default function App() {
  const [user, set] = React.useState({});

  React.useEffect(() => {
    axios.get("https://api.github.com/users/DRodrigues17").then((response) => {
      set(response.data);
    });
  }, []);

  return (
    <div>
      <h1>o multiverso da extensão de arquivo</h1>
      <h2>{user.name}</h2>
      <App />
    </div>
  );
}
