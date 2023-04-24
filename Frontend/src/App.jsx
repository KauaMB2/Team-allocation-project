import Header from './Header'
import Nav from './Nav'
import Employees from './Employees'
import Footer from './Footer'
import NotFound from './NotFound'
import GroupTeamMembers from './GroupTeamMembers'
import AddEmployees from './AddEmployees'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState, useEffect } from 'react'//Import the Use State Hook
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const x=async ()=>{
  console.log("employees")
  const employees=await EmployeesModel.find({})
  console.log(employees)
}
x()
const App=()=>{

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA")//Destructoring assignment

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{//Destructoring assignment
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }])

  useEffect(() => {//Use the useEffect hook to store JSON data in localStorage
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees])
  useEffect(() => {//Use the useEffect hook to store JSON data in localStorage
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])

  const handleTeamSelectionChange = (event) => {
    console.log(event.target.value)
    setTeam(event.target.value)//Change the Team state
  }
  const handleEmployeeCardClick = (event) => {
    if(event.target.id){
      console.log(event.target.id)
    }
    else{
      const transformedEmployees = employees.map((employee) =>{
        console.log(event.target.className)
        if(employee.id === parseInt(event.currentTarget.id)){
          if (employee.teamName === selectedTeam){
            return {...employee, teamName:''}
          } else{
            return {...employee,teamName: selectedTeam}
          }
        }else{
          return employee
        }
      })
      console.log(transformedEmployees)
      setEmployees(transformedEmployees)
    }
  }
  return (
    <Router>
      <Nav></Nav>
      <Header selectedItem={selectedTeam} teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length} />
      <Routes>
        <Route path="/" element={
          <Employees employees={employees}
            selectedTeam={selectedTeam}
            handleEmployeeCardClick={handleEmployeeCardClick}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />}>
        </Route>
        <Route path="/GroupTeamMembers" element={<GroupTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam} />}></Route>
        <Route path="/addEmployees" element={<AddEmployees/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

// The JSX(JavaScript Xml) is a JS extension that allows write HTML in JavaScript likely the XMl syntax!
// The Transpiler is charge of translate the JSX syntax to original HTML and JavsScript syntax

//const [count, setCount]=useState(0) - It is called "Array Destructoring Syntax". "count", in this case, is a Number and "setCount" is a function to handle the "count".