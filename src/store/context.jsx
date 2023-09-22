import { useState, createContext, useEffect } from 'react'

export const EmployeesContext = createContext()
const options = [
  { value: 'Subscribed', text: 'Subscribed' },
  { value: 'Not Subscribed', text: 'Not Subscribed' },
  { value: 'Other', text: 'Other' },
]

const Context = (props) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [sibscribe, setSibscribe] = useState(options[0].value)
  const [isChecked, setIsChecked] = useState(false)
  const [employmentStatus, setEmploymentStatus] = useState('Unemployed')
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null)
  const [isMode, setIsMode] = useState(() => {
    const storedMode = localStorage.getItem('isMode');
    return storedMode ? JSON.parse(storedMode) : false;
  });

  const [employees, setEmployees] = useState(() => {
    const storedEmployees = localStorage.getItem('employees')
    return storedEmployees
      ? JSON.parse(storedEmployees)
      : [
          {
            id: 1,
            name: 'Micheal Jackson',
            age: 25,
            subscription: 'Sibscribed',
            employment: 'Employed',
          },
          {
            id: 2,
            name: 'Charles Oliveira',
            age: 33,
            subscription: 'Not Sibscribed',
            employment: 'Unemployed',
          },
        ]
  })

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('isMode', JSON.stringify(isMode));
  }, [employees, isMode])

  const toggleMode = () => {
    setIsMode(!isMode)
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    setEmploymentStatus(isChecked ? 'Unemployed' : 'Employed')
  }

  const handleAddEmployee = (e) => {
    e.preventDefault()
    if (!name || !age) {
      alert('Please fill in both name and age')
      return
    }
    const newEmployee = {
      id: Date.now(),
      name: name,
      age: age,
      subscription: sibscribe,
      employment: employmentStatus,
    }
    setEmployees([...employees, newEmployee])
    setName('')
    setAge('')
    setSibscribe(options[0].value)
    setIsChecked(false)
  }

  const handleSelectEmployee = (id) => {
    if (selectedEmployeeId === id) {
      setSelectedEmployeeId(null)
    } else {
      setSelectedEmployeeId(id)
    }
  }

  const handleDeleteEmployee = (e) => {
    e.preventDefault()
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== selectedEmployeeId
    )
    setEmployees(updatedEmployees)
  }

  const value = {
    employees,
    name,
    setName,
    age,
    setAge,
    sibscribe,
    setSibscribe,
    isChecked,
    handleCheckboxChange,
    options,
    employmentStatus,
    handleAddEmployee,
    handleDeleteEmployee,
    handleSelectEmployee,
    selectedEmployeeId,
    toggleMode,
    isMode,
  }

  return (
    <EmployeesContext.Provider value={value}>
      {props.children}
    </EmployeesContext.Provider>
  )
}

export default Context
