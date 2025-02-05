import CharacterList from "./CharacterList"
import PropTypes from "prop-types"

function Home({listCharacters}) {
  return (
    <CharacterList listCharacters={listCharacters}/>
  )
}

Home.PropTypes = {
  listCharacters: PropTypes.array,
}

export default Home