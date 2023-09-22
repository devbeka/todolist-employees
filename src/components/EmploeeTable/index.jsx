import './styles.scss'
import { useContext } from 'react'
import { EmployeesContext } from '../../store/context'

const titles = ['Name', 'Age', 'Subscription', 'Employment']

const EmploeeTable = () => {
  const { employees, handleSelectEmployee, selectedEmployeeId } = useContext(EmployeesContext)

  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          {titles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>

      <tbody className="table__body">
        {employees.length === 0 ? (
          <tr>
            <td colSpan={titles.length}>No employees found.</td>
          </tr>
        ) : (
          employees.map((employee) => (
            <tr
              onClick={() => handleSelectEmployee(employee.id)}
              key={employee.id}
              className={selectedEmployeeId === employee.id ? 'selected-employee' : ''}
            >
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.subscription}</td>
              <td>{employee.employment}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

export default EmploeeTable