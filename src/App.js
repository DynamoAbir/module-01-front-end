import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="App">
      <div>
        <input type="text" name="name" id="name" placeholder="Name"></input>
        <input type="email" name="email" id="email" placeholder="Email"></input>
        <button type="submit">submit</button>
      </div>

      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.name} <br />
            {user.email}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
