import { useState, useRef } from 'react'


import './App.css'

function App() {

  const [selectedMethod, setSelectedMethod] = useState('')

  const [selectedCity, setSelectedCity] = useState('')
  const [cities, setCities] = useState(['Tanger', "Rabat", "Agadir"])
  const [city, setCity] = useState('')

  const checkboxRefs = useRef([])
  const [selectedSkills, setSelectedSkills] = useState([]);

  const updateSelectedSkills = () => setSelectedSkills(checkboxRefs.current.filter(el => el.checked).map(el => el.value))

  const handleSelectAll = () => {
    checkboxRefs.current.forEach(cb => {
      cb.checked = true
    })
    updateSelectedSkills()
  }
 
    const handleDeselectAll = () => {
      checkboxRefs.current.forEach(cb => {
        cb.checked = false
      })
      updateSelectedSkills()
    }
  return (
    <>
      <form action="">
        <label htmlFor="">
            <input type="radio" name="method" value="SMS" onChange={(e) => setSelectedMethod(e.target.value)}/>
            SMS
        </label>
        <label htmlFor="">
            <input type="radio" name="method" value="Email" onChange={(e) => setSelectedMethod(e.target.value)}/>
            Email
        </label>
        
        <h2>Enterer use ville:</h2>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
        <input type="button" onClick={()=> {(city != "") && setCities([...cities, city]); setCity('') }} value = "add city" />
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>

          {
            cities.map((optionCity, index) => (
              <option value={optionCity} key={index}>{optionCity}</option>
            ))
          }
        </select>
        
        <h2>Selectionnez vos competences:</h2>
        <label>
        <input
        type="checkbox"
        value="React"
        ref={(el) => (checkboxRefs.current[0] = el)}
        onChange={updateSelectedSkills}
        />
        React
        </label>

        <label>
        <input
        type="checkbox"
        value="Node.js"
        ref={(el) => (checkboxRefs.current[1] = el)}
        onChange={updateSelectedSkills}
        />
        Node.js
        </label>

        <label>
        <input
        type="checkbox"
        value="JavaScript"
        ref={(el) => (checkboxRefs.current[2] = el)}
        onChange={updateSelectedSkills}
        />
        JavaScript
        </label>

        <div style={{ marginTop: "10px" }}>
          <button type="button" onClick={handleSelectAll}>
            Tout sélectionner
          </button>
          <button type="button" onClick={handleDeselectAll} style={{ marginLeft:"10px" }}>
            Tout désélectionner
          </button>
        </div>

        
                
      </form>

      <div>
        <h2>Tous ce que vous avez selectione:</h2>


        <p>Vous receverez vos notifcations par {selectedMethod}</p>

        <p>Selected city: {selectedCity}</p>
        <h4 style={{ marginTop: "15px" }}>Compétences sélectionnées :</h4>
        {selectedSkills.length === 0 ? (
          <p>Aucune compétence sélectionnée.</p>
          ) : (
          <ul>
          {selectedSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default App
