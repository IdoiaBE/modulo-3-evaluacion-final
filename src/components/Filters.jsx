import "../styles/Filters.scss"
import FilterHouse from "./FilterHouse"
import FilterName from "./FilterName"

function Filters() {
  return (
    <section className="main_filters">
        <form className="main_filters_form">
            <FilterName/>
            <FilterHouse/>
        </form>
    </section>
  )
}

export default Filters