import React, {useEffect, useState} from 'react'

export default function App() {
 
  const [backend, setBackend ] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api").then(
      response => response.json()
    ). then (
      data => {
        setBackend(data);
      }
    )
  }, []);

  return (
    <div>
      {(backend.users === undefined)?(
       <p>Loading</p>
       ):(
       backend.users.map((user, i) =>(
         <p key={i}>{user}</p>
        ))
    // The Frontend
      )}
    </div>
  )
}

