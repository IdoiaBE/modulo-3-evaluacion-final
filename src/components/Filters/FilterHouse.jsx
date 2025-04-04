import "../../styles/Filters.scss"
import PropTypes from "prop-types"

function FilterHouse({changeFilters, byHouse}) {
    const hanldeSelect = (ev)=>{
        changeFilters(ev.target.id, ev.target.value)
    }

  return (
    <label>
        <p>Selecciona la casa:</p>
        <select id="house" value={byHouse} onChange={hanldeSelect}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
        </select>
    </label>
  )
}

FilterHouse.prototypes ={
    changeFilters: PropTypes.func,
    byHouse: PropTypes.string,
}

export default FilterHouse