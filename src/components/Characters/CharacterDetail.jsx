import "../../styles/CharacterDetail.scss"
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function CharacterDetail({filteredCharacters, characterId}) {
  const navigate = useNavigate();
  
  const characterDetails = filteredCharacters.find((character)=> character.id === characterId)
  // console.log(characterDetails)
  if (!characterDetails) {
    return <div>Personaje no encontrado.</div>;
  }

  const altText = `imagen de ${characterDetails.name}`

  const altNames = characterDetails.altNames.length > 0
    ? characterDetails.altNames.map((altName, index) => <li key={index}>{altName}</li>)
    : null;

  const houseClass = characterDetails.house.toLowerCase() || "default";

  const livingStatus = characterDetails.livingStatus();
  
  const statusIcon = (livingStatus === "Vivo" || livingStatus === "Viva") ? <i className="bi bi-emoji-heart-eyes-fill"></i> : <i className="bi bi-emoji-dizzy-fill"></i>;


  return (
    <section className="main_detail">
      <i className="bi bi-box-arrow-in-left detail_back" onClick={() => navigate("/")}></i>
      <article className={`detail_card ${houseClass}`}>
        <img src={characterDetails.img} alt={altText} />
        <div className="card">
          <h3>{characterDetails.name}</h3>
          <ul>{altNames}</ul>
          <div className="card_info">
            <p>Estatus:</p> 
            <p>{livingStatus}</p>
            <p>{statusIcon}</p>
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