import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


const api = "https://jsonplaceholder.typicode.com/posts"

function App() {
  const [posts, setPosts] = useState([])
  

  useEffect(() => {

    axios
    .get(`${api}`)
    .then((response) => setPosts(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });

  });

 


  return (
    <div className="App">

      <h1>Posts</h1>

      {posts.map((post) => {
        return(
          <div className='posts'>
            <span>{post.id}</span>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )
      })}
      
       
    </div>
  )
}

export default App
