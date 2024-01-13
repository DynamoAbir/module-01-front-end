import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = [...users, data];
        setUsers(newUser);
      });
    e.target.reset();
  };
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder="Name"></input>
        <input type="email" name="email" id="email" placeholder="Email"></input>
        <button type="submit">submit</button>
      </form>

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
