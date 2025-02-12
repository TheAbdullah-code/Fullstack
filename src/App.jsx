import React, {useEffect, useState} from 'react'
import Register from './Register'

export default function App() {
 
  const [backend, setBackend ] = useState({});

  useEffect(() => {
    fetch("https://fullstackserver-3.onrender.com/api").then(
      response => response.json()
    ). then (
      data => {
        setBackend(data);
      }
    )
  }, []);

  return (
    <div>
<Register />
    </div>
  )
}

