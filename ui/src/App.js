import logo from './logo.svg';
import './App.css';
// import { Button, Modal, makeStyles, Input } from '@material-ui/core';
// import { mergeClasses } from '@material-ui/styles';
import React, {useState, useEffect} from 'react';
import './App.css';


const BASE_URL = 'http://localhost:8000/';

function App() {
  const [posts, setPosts] = useState([]);
  let item_id = 1;
  useEffect(() => {
    fetch(BASE_URL+`/items`)
        .then(response => {
          if (response.ok) {
            return response.json
          }
          throw response
        })

    .catch(error => {
      console.log(error);
      alert(error)
    })
  }, [])


  return (
    "Hello, world!"
  );
  //  return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
