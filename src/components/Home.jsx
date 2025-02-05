import CharacterList from "./CharacterList"
import PropTypes from "prop-types"
import Filters from "./Filters"

function Home({listCharacters, changeFilters}) {
  return (
    <>
    <Filters changeFilters={changeFilters}/>
    <CharacterList listCharacters={listCharacters}/>
    </>
  )
}

Home.propTypes = {
  listCharacters: PropTypes.array,
  changeFilters: PropTypes.func,
}

export default Home