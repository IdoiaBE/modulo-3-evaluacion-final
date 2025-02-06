import "../../styles/CharacterDetail.scss"
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function CharacterDetail({filteredCharacters, characterId}) {
  
  const characterDetails = filteredCharacters.find((character)=> character.id === characterId)
  // console.log(characterDetails)
  if (!characterDetails) {
    return <div>Personaje no encontrado.</div>;
  }

  const altText = `imagen de ${characterDetails.name}`

  const altNames = characterDetails.altNames.length > 0
    ? characterDetails.altNames.map((altName, index) => <li key={index}>{altName}</li>)
    : null;

  const navigate = useNavigate();

  return (
    <section className="main_detail">
      <i className="bi bi-box-arrow-in-left detail_back" onClick={() => navigate("/")}></i>
      <article className="detail_card ravenclaw">
        <img src={characterDetails.img} alt={altText} />
        <div className="card">
          <h3>{characterDetails.name}</h3>
          <ul>{altNames}</ul>
          <div className="card_info">
            <p>Estatus:</p> 
            <p>{characterDetails.livingStatus()}</p>
          </div>
          <div className="card_info">
            <p>Especie:</p> 
            <p>{characterDetails.species}</p>
          </div>
          <div className="card_info">
            <p>Género:</p> 
            <p>{characterDetails.gender}</p>
          </div>
          <div className="card_info">
            <p>Casa:</p> 
            <p>{characterDetails.house}</p>
          </div>
        </div>
        
      </article>
    </section>
  )
}

CharacterDetail.prototypes ={
  filteredCharacters: PropTypes.array,
  characterId: PropTypes.string,
}

export default CharacterDetail