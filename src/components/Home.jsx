import CharacterList from "./Characters/CharacterList"
import PropTypes from "prop-types"
import Filters from "./Filters/Filters"

function Home({listCharacters, changeFilters, searchedName}) {
  return (
    <>
    <Filters changeFilters={changeFilters}/>
    <CharacterList listCharacters={listCharacters} searchedName={searchedName}/>
    </>
  )
}

Home.propTypes = {
  listCharacters: PropTypes.array,
  changeFilters: PropTypes.func,
  searchedName: PropTypes.string,
}

export default Home