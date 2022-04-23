import "./App.css";
import { useState } from "react";
import { Users } from "./data";

function App() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState(false);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setSearch(true);
  };

  return (
    <div className="App">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        autoFocus={true}
        onInput={handleSearch}
      />
      {search && (
        <ul>
          {Users.filter(
            (user) =>
              user.name.toLowerCase().includes(query) ||
              user.age.toString().includes(query) ||
              user.id.toString().includes(query)
          ).map((user) => {
            return (
              <li
                className="list-item"
                key={user.id}
              >{`${user.id} - ${user.name} - ${user.age} - ${user.gender}`}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
