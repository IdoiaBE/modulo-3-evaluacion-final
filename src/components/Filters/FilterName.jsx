import "../../styles/Filters.scss"
import PropTypes from "prop-types"

function FilterName({changeFilters, byName}) {
    const handleInput = (ev)=>{
        changeFilters(ev.target.id, ev.target.value.toLowerCase())
    }

  return (
    <label>
      <p>Busca por nombre:</p>
      <input type="text" placeholder="Escribe aquí..." id="name" value={byName} onChange={handleInput}/>
    </label>
  )
}

FilterName.prototypes ={
    changeFilters: PropTypes.func,
    byName: PropTypes.string,
}

export default FilterName