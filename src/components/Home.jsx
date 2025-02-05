import CharacterList from "./CharacterList"
import PropTypes from "prop-types"
import Filters from "./Filters"

function Home({listCharacters}) {
  return (
    <>
    <Filters/>
    <CharacterList listCharacters={listCharacters}/>
    </>
  )
}

Home.propTypes = {
  listCharacters: PropTypes.array,
}

export default Home