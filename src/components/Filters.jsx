import "../styles/Filters.scss"
import FilterHouse from "./FilterHouse"
import FilterName from "./FilterName"
import PropTypes from "prop-types"

function Filters({changeFilters}) {
    const handleForm = (ev)=>{
        ev.preventDefault()
    }

  return (
    <section className="main_filters">
        <form className="main_filters_form" onSubmit={handleForm}>
            <FilterName changeFilters={changeFilters}/>
            <FilterHouse changeFilters={changeFilters}/>
        </form>
    </section>
  )
}

Filters.prototypes ={
    changeFilters: PropTypes.func,
}

export default Filters