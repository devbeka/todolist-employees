import { EmployeesContext } from '../../store/context'
import { useContext } from 'react'
import './styles.scss'

const InsertForm = () => {
  const {
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
    toggleMode,
    isMode,
  } = useContext(EmployeesContext)

  return (
    <form>
      <div className="insert">
        <div className={`insert__info ${isMode ? 'dark-mode' : ''}`}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
          />
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            type="number"
          />
          <select
            value={sibscribe}
            onChange={(e) => setSibscribe(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value}>{option.text}</option>
            ))}
          </select>
        </div>

        <div className="insert__checkbox">
          <input
            type="checkbox"
            checked={isChecked}
            id="myCheckbox"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="myCheckbox">{employmentStatus}</label>
        </div>

        <button onClick={handleAddEmployee} className="insert__submit">
          Insert
        </button>
        <div className="line"></div>

        <div className="insert__mode">
          <input
            onChange={toggleMode}
            type="checkbox"
            checked={isMode}
            id="modeSwitch"
          />
          <label htmlFor="modeSwitch"></label>
          <span>Mode</span>
        </div>

        <button onClick={handleDeleteEmployee} className="insert__delete">
          Delete
        </button>
      </div>
    </form>
  )
}

export default InsertForm
