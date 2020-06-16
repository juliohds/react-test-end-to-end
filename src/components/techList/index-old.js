/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect} from 'react'

export default function techList() {

  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState("");

  useEffect(() => {
    const techs = localStorage.getItem('techs');
    if(techs){
      setTechs(JSON.parse(techs))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs))
  }, [techs])

  function handleAddTechs(){
    if(newTech !== ""){
      setTechs([...techs, newTech])
      setNewTech('')
    }
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTechs}>
      <ul data-testid="tech-list">
        {techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
      <label htmlFor="tech">Tech</label>
      <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button onClick={() => handleAddTechs()}>Adicionar</button>
    </form>
  )
}
