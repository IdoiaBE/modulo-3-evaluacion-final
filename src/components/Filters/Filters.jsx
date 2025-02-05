import "../../styles/Filters.scss"
import FilterHouse from "./FilterHouse"
import FilterName from "./FilterName"
import PropTypes from "prop-types"

function Filters({changeFilters, filters}) {
    const handleForm = (ev)=>{
        ev.preventDefault()
    }

  return (
    <section className="main_filters">
        <form className="main_filters_form" onSubmit={handleForm}>
            <FilterName changeFilters={changeFilters} byName={filters.name}/>
            <FilterHouse changeFilters={changeFilters} byHouse={filters.house}/>
        </form>
    </section>
  )
}

Filters.prototypes ={
    changeFilters: PropTypes.func,
    filters: PropTypes.object,
}

export default Filters