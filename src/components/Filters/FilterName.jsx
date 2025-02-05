import PropTypes from "prop-types"

function FilterName({changeFilters}) {
    const handleInput = (ev)=>{
        changeFilters(ev.target.id, ev.target.value.toLowerCase())
    }

  return (
    <label>
        Busca por personaje:
        <input type="text" id="name" onChange={handleInput}/>
    </label>
  )
}

FilterName.prototypes ={
    changeFilters: PropTypes.func,
}

export default FilterName