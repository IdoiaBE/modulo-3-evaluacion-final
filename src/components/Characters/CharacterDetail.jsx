import "../../styles/CharacterDetail.scss"
import PropTypes from 'prop-types';

function CharacterDetail({listCharacters, characterId}) {
  console.log(listCharacters)
  
  // const characterDetails = listCharacters.find((character)=> character.id === characterId)
  // console.log(characterDetails)

  // const altText = `imagen de ${characterDetails.name}`

  return (
    <section className="main_detail">
      <i className="bi bi-box-arrow-in-left detail_back"></i>
      <article className="detail_card">
        <img src="" alt="" />
        <div className="card">
          <h3></h3>
          <div className="card_info">
            <p>Status:</p> 
            <p></p>
          </div>
          <div className="card_info">
            <p>Species:</p> 
            <p></p>
          </div>
          <div className="card_info">
            <p>Gender:</p> 
            <p></p>
          </div>
          <div className="card_info">
            <p>House:</p> 
            <p></p>
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