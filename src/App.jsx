import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from "./Table";



// Example usage with JSON data
const jsonData = [
  { id: 1, name: "John Doe", age: 28, city: "New York", occupation: "Engineer", email: "john@example.com" },
  { id: 2, name: "Jane Smith", age: 34, city: "Los Angeles", occupation: "Designer", email: "jane@example.com" },
  { id: 3, name: "Michael Brown", age: 22, city: "Chicago", occupation: "Developer", email: "michael@example.com" },
  { id: 4, name: "Sarah Johnson", age: 30, city: "Houston", occupation: "Teacher", email: "sarah.johnson@example.com" },
  { id: 5, name: "David Lee", age: 40, city: "Philadelphia", occupation: "Architect", email: "david.lee@example.com" },
  { id: 6, name: "Emily Davis", age: 27, city: "San Francisco", occupation: "Marketing Manager", email: "emily.davis@example.com" },
  { id: 7, name: "James Wilson", age: 45, city: "Boston", occupation: "Accountant", email: "james.wilson@example.com" },
  { id: 8, name: "Anna White", age: 32, city: "Seattle", occupation: "HR Manager", email: "anna.white@example.com" },
  { id: 9, name: "Robert Taylor", age: 29, city: "Dallas", occupation: "Sales Executive", email: "robert.taylor@example.com" },
  { id: 10, name: "Lisa Moore", age: 38, city: "Phoenix", occupation: "Consultant", email: "lisa.moore@example.com" },
  { id: 11, name: "Daniel Thompson", age: 36, city: "San Diego", occupation: "Software Engineer", email: "daniel.thompson@example.com" },
  { id: 12, name: "Megan Lewis", age: 24, city: "Denver", occupation: "Nurse", email: "megan.lewis@example.com" },
  { id: 13, name: "Chris Harris", age: 31, city: "Atlanta", occupation: "Project Manager", email: "chris.harris@example.com" },
  { id: 14, name: "Samantha Clark", age: 29, city: "Miami", occupation: "Graphic Designer", email: "samantha.clark@example.com" },
  { id: 15, name: "Matthew Young", age: 35, city: "Detroit", occupation: "Lawyer", email: "matthew.young@example.com" },
  { id: 16, name: "Jessica Hall", age: 26, city: "Orlando", occupation: "Social Media Manager", email: "jessica.hall@example.com" },
  { id: 17, name: "Brian King", age: 41, city: "Minneapolis", occupation: "Doctor", email: "brian.king@example.com" },
  { id: 18, name: "Jennifer Scott", age: 33, city: "Portland", occupation: "Photographer", email: "jennifer.scott@example.com" },
  { id: 19, name: "Kevin Green", age: 37, city: "Nashville", occupation: "Civil Engineer", email: "kevin.green@example.com" },
  { id: 20, name: "Laura Baker", age: 23, city: "Las Vegas", occupation: "Event Planner", email: "laura.baker@example.com" },
  { id: 21, name: "Steven Carter", age: 42, city: "Kansas City", occupation: "CEO", email: "steven.carter@example.com" },
  { id: 22, name: "Rachel Wright", age: 39, city: "Charlotte", occupation: "Data Analyst", email: "rachel.wright@example.com" },
  { id: 23, name: "Jason Martin", age: 28, city: "Indianapolis", occupation: "IT Specialist", email: "jason.martin@example.com" },
  { id: 24, name: "Ashley Mitchell", age: 31, city: "Columbus", occupation: "Product Manager", email: "ashley.mitchell@example.com" },
  { id: 25, name: "Aaron Perez", age: 44, city: "Oklahoma City", occupation: "Real Estate Agent", email: "aaron.perez@example.com" },
  { id: 26, name: "Linda Turner", age: 27, city: "San Antonio", occupation: "UX Designer", email: "linda.turner@example.com" },
  { id: 27, name: "Andrew Edwards", age: 40, city: "Salt Lake City", occupation: "Entrepreneur", email: "andrew.edwards@example.com" },
  { id: 28, name: "Kimberly Collins", age: 25, city: "Raleigh", occupation: "HR Specialist", email: "kimberly.collins@example.com" },
  { id: 29, name: "Joshua Stewart", age: 32, city: "Memphis", occupation: "Mechanical Engineer", email: "joshua.stewart@example.com" },
  { id: 30, name: "Rebecca Barnes", age: 29, city: "Louisville", occupation: "Interior Designer", email: "rebecca.barnes@example.com" },
  { id: 31, name: "Brandon Phillips", age: 34, city: "Baltimore", occupation: "Operations Manager", email: "brandon.phillips@example.com" },
  { id: 32, name: "Stephanie Anderson", age: 30, city: "Austin", occupation: "Software Tester", email: "stephanie.anderson@example.com" },
  { id: 33, name: "Ryan Diaz", age: 37, city: "Milwaukee", occupation: "Logistics Manager", email: "ryan.diaz@example.com" },
  { id: 34, name: "Nicole Gray", age: 24, city: "Sacramento", occupation: "Copywriter", email: "nicole.gray@example.com" },
  { id: 35, name: "Adam Hill", age: 43, city: "Tampa", occupation: "Pharmacist", email: "adam.hill@example.com" },
  { id: 36, name: "Michelle Reed", age: 38, city: "Richmond", occupation: "Public Relations Specialist", email: "michelle.reed@example.com" },
  { id: 37, name: "Ethan Hughes", age: 31, city: "Cleveland", occupation: "Network Engineer", email: "ethan.hughes@example.com" },
  { id: 38, name: "Laura Jenkins", age: 36, city: "St. Louis", occupation: "Content Manager", email: "laura.jenkins@example.com" },
  { id: 39, name: "Patrick Howard", age: 28, city: "Pittsburgh", occupation: "Financial Analyst", email: "patrick.howard@example.com" },
  { id: 40, name: "Julia Campbell", age: 29, city: "New Orleans", occupation: "Research Scientist", email: "julia.campbell@example.com" },
  { id: 41, name: "Henry Rivera", age: 27, city: "Riverside", occupation: "Database Administrator", email: "henry.rivera@example.com" },
  { id: 42, name: "Melissa Ward", age: 33, city: "Cincinnati", occupation: "Advertising Manager", email: "melissa.ward@example.com" },
  { id: 43, name: "Sean Long", age: 41, city: "Virginia Beach", occupation: "HR Director", email: "sean.long@example.com" },
  { id: 44, name: "Victoria Nelson", age: 30, city: "Buffalo", occupation: "Marketing Director", email: "victoria.nelson@example.com" },
  { id: 45, name: "Charles Russell", age: 35, city: "Jacksonville", occupation: "Biomedical Engineer", email: "charles.russell@example.com" },
  { id: 46, name: "Olivia Perry", age: 26, city: "Fort Worth", occupation: "Account Executive", email: "olivia.perry@example.com" },
  { id: 47, name: "Eric Bell", age: 39, city: "San Jose", occupation: "Supply Chain Manager", email: "eric.bell@example.com" },
  { id: 48, name: "Rachel Brooks", age: 28, city: "Tulsa", occupation: "Web Developer", email: "rachel.brooks@example.com" },
  { id: 49, name: "George Bennett", age: 32, city: "Hartford", occupation: "Cybersecurity Analyst", email: "george.bennett@example.com" },
  { id: 49, name: "Harry Potter", age: 32, city: "London", occupation: "Cybersecurity Analyst", email: "harry.potter@example.com" },
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
