import PropTypes from "prop-types"

function FilterName({changeFilters, byName}) {
    const handleInput = (ev)=>{
        changeFilters(ev.target.id, ev.target.value.toLowerCase())
    }

  return (
    <label>
        Busca por personaje:
        <input type="text" id="name" value={byName} onChange={handleInput}/>
    </label>
  )
}

FilterName.prototypes ={
    changeFilters: PropTypes.func,
    byName: PropTypes.string,
}

export default FilterName