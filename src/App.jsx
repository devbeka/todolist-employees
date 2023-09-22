import { useContext } from 'react'
import { EmployeesContext } from './store/context'
import EmploeeTable from './components/EmploeeTable'
import InsertForm from './components/InsertForm'

const App = () => {
  const { isMode } = useContext(EmployeesContext)
  return (
    <div className={`App ${isMode ? 'dark-mode' : ''}`}>
      <InsertForm />
      <EmploeeTable />
    </div>
  )
}

export default App
