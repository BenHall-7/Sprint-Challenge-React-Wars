import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Person from "./components/Person";

const App = () => {
  const [page, setPage] = useState("https://swapi.co/api/people/");
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get(page)
      .then(response => {
        setPeople(response.data.results);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
        console.log(response.data.results);
      })
      .catch(rejection => {
        console.log(rejection);
      });
  }, [page]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {
        people.map((person, index) => <Person data={person} key={index}/>)
      }
    </div>
  );
}

export default App;
