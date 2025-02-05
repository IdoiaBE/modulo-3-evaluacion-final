import "../styles/CharacterList.scss"
import CharacterCard from "./CharacterCard"
import PropTypes from "prop-types"

function CharacterList({listCharacters}) {

  return (
    <section className="main_list">
      {listCharacters.map(eachCharacter => <CharacterCard key={eachCharacter.id} eachCharacter={eachCharacter}/>)}
    </section>
  )
}

CharacterList.propTypes = {
  listCharacters: PropTypes.array,
}

export default CharacterList