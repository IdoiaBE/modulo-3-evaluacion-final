import "../styles/CharacterList.scss"
import CharacterCard from "./CharacterCard"

function CharacterList({listCharacters}) {

  return (
    <section className="main_list">
      {listCharacters.map(eachCharacter => <CharacterCard key={eachCharacter.id} eachCharacter={eachCharacter}/>)}
    </section>
  )
}

export default CharacterList