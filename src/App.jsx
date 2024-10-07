import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from "./Table";



// Example usage with JSON data
const jsonData = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    city: "New York",
    occupation: "Engineer",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    city: "Los Angeles",
    occupation: "Designer",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Michael Brown",
    age: 22,
    city: "Chicago",
    occupation: "Developer",
    email: "michael@example.com",
  },
  // Add more rows as needed
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Table data={jsonData} />
    </>
  )
}

export default App
