import "../../styles/CharacterDetail.scss"
import PropTypes from 'prop-types';

function CharacterDetail({listCharacters, characterId}) {
  
  const characterDetails = listCharacters.find((character)=> character.id === characterId)
  console.log(characterDetails)

  const altText = `imagen de ${characterDetails.name}`

  return (
    <section className="main_detail">
      <i className="bi bi-box-arrow-in-left detail_back"></i>
      <article className="detail_card">
        <img src={characterDetails.img} alt={altText} />
        <div className="card">
          <h3>{characterDetails.name}</h3>
          <div className="card_info">
            <p>Status:</p> 
            <p>{characterDetails.alive}</p>
          </div>
          <div className="card_info">
            <p>Species:</p> 
            <p>{characterDetails.species}</p>
          </div>
          <div className="card_info">
            <p>Gender:</p> 
            <p>{characterDetails.gender}</p>
          </div>
          <div className="card_info">
            <p>House:</p> 
            <p>{characterDetails.house}</p>
          </div>
        </div>
        
      </article>
    </section>
  )
}

CharacterDetail.prototypes ={
  listCharacters: PropTypes.array,
  characterId: PropTypes.string,
}

export default CharacterDetail