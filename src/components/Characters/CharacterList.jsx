import "../../styles/CharacterList.scss"
import CharacterCard from "./CharacterCard"
import PropTypes from "prop-types"

function CharacterList({listCharacters, searchedName}) {
  if (listCharacters.length === 0) {
    return (
      <section className="main_list">
        <p>No hay ningún personaje que coincida con {searchedName}</p>
      </section>
    )
  }

  return (
    <section className="main_list">
      {listCharacters.map(eachCharacter => <CharacterCard key={eachCharacter.id} eachCharacter={eachCharacter}/>)}
    </section>
  )
}

CharacterList.propTypes = {
  listCharacters: PropTypes.array,
  searchedName: PropTypes.string,
}

export default CharacterList