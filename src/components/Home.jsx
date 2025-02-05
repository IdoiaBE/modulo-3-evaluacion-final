import CharacterList from "./characters/CharacterList"
import PropTypes from "prop-types"
import Filters from "./filters/Filters"

function Home({listCharacters, changeFilters, filters}) {
  return (
    <>
    <Filters changeFilters={changeFilters} filters={filters}/>
    <CharacterList listCharacters={listCharacters} filters={filters}/>
    </>
  )
}

Home.propTypes = {
  listCharacters: PropTypes.array,
  changeFilters: PropTypes.func,
  filters: PropTypes.object,
}

export default Home