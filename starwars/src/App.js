import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Person from "./components/Person";
import styled from "styled-components";

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

  let Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
      width: 100px;
      margin: 0 10px;
    }
  `;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Buttons>
        <button onClick={() => {
          if (prevPage != null) {
            setPage(prevPage);
          }
        }}>Previous</button>
        <button onClick={() => {
          if (nextPage != null) {
            setPage(nextPage);
          }
        }}>Next</button>
      </Buttons>
      {people.map((person, index) => <Person data={person} key={index}/>)}
    </div>
  );
}

export default App;
