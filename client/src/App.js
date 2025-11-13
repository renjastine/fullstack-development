import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/posts")
      .then((res) => {
        setListOfPosts(res.data);
      });

  }, []);

  return (
    <div className="App flex-c">
      {listOfPosts.map((value, key) => (
        <div className='card flex-c'>
          <div className='title flex-c'> {value.title}</div>
          <div className='body flex-c'> {value.postText}</div>
          <div className='username flex-c'> {value.username}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
