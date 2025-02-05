import PropTypes from "prop-types"

function FilterHouse({changeFilters}) {
    const hanldeSelect = (ev)=>{
        changeFilters(ev.target.id, ev.target.value)
    }

  return (
    <label>
        Selecciona la casa:
        <select id="house" onChange={hanldeSelect}>
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
}

export default FilterHouse