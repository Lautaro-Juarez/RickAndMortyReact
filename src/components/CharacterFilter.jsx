import '../styles/characters_filter.css'
import { useState } from 'react'

export const CharacterFilter = () => {

  const [active, setActive] = useState(false)
  const [selected, setSelected] = useState({
    status: false,
    type: false,
    gender: false,
    species: false
  })

  const handleFilter = ({ target }) => {
    setSelected({
      ...selected,
      [target.value]: target.checked,
    })
    console.log(selected)
  }

  return (
    <section className="filter-container">
      <div className="icon-contain">
        <span className='icon' onClick={() => setActive(!active)}>Filtrar</span>
      </div>
      <ul className={active !== false ? 'show' : 'hide'}>
        <label name='status'>Estado</label>
        <li><input type="checkbox" value='status'onClick={(e) => handleFilter(e)} className='item' name='status' /></li>
        <label name='gender'>Genero</label>
        <li><input type="checkbox" value='gender'onClick={(e) => handleFilter(e)} className='item' name='gender' /></li>
        <label name='type'>Tipo</label>
        <li><input type="checkbox" value='type'onClick={(e) => handleFilter(e)} className='item' name='type' /></li>
        <label name='species'>Especie</label>
        <li><input type="checkbox" value='species'onClick={(e) => handleFilter(e)} className='item' name='species' /></li>
      </ul>
    </section>
  )
}

