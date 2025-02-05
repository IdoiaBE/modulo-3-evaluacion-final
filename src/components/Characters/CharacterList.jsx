import "../../styles/CharacterList.scss"
import CharacterCard from "./CharacterCard"
import PropTypes from "prop-types"

function CharacterList({listCharacters, filters}) {
  const searchedName = filters.name;

  if (listCharacters.length === 0) {
    return (
      <section className="main_list">
        <p>No hay ningún personaje que se llame {searchedName}</p>
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
  filters: PropTypes.object,
}

export default CharacterList