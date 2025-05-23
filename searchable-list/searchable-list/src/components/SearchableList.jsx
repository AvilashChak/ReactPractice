import React, { useEffect, useState } from "react";
//import axios from 'axios';
import useFetch from "../api/useFetch";

const SearchableList = () => {
  //const items = ["Apple", "Banana", "Grapes", "Watermelon", "Kiwi"];
  //const [data, setData] = useState([]);
  const { data, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItem, setFilteredItem] = useState("");
  const [hasSeacrhed, setHasSearched] = useState(false);
  const [debounceSearchQuery, setDebounceSearchQuery] = useState("");

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((json) => setData(json))
  //     .catch((err) => console.error("Error fetching users:", err));
  //   }, []);

  // Using axios
//   useEffect(() => {
//     axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         setData(response.data)
//     })
//     .catch((error) => console.error("Error fetching users:", error));
//   }, []);

  // Debounce
  useEffect(() => {
    const handler = setTimeout(() => {
        setDebounceSearchQuery(searchQuery);
    }, 500);

    return () => {
        clearTimeout(handler);
    };
  }, [searchQuery]);

  const handleSearch = () => {
    const filtered = data.filter((user) => {
      return user.name.toLowerCase().includes(debounceSearchQuery.toLowerCase());
    });
    setFilteredItem(filtered);
    setHasSearched(true);
    setSearchQuery("");
  };

  return (
    <div>
      <h2>Searchable List (Debounced + useFetch)</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={() => handleSearch()}>Search</button>
      <ul>
        {hasSeacrhed ? (
          filteredItem.length > 0 ? (
            filteredItem.map((user) => <li key={user.id}>{user.name}</li>)
          ) : (
            <p>No matching item found!</p>
          )
        ) : null}
      </ul>
    </div>
  );
};

export default SearchableList;
