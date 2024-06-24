export const GridCharacters = ({ characters = [] }) => {
    return (
        <div className='row'>
            {characters.map((character, index) => {
                return (
                <div className='col mb-4' key={index}>
                    <div className='card' style={{minwidth:'200px'}}>
                        <img src={character.image} alt="" />
                        <div className='card-boby'>
                            <h5 className='card-title'>{character.name}</h5>
                            <hr />                         
                            <p>location: {character.location.name}</p>
                            <p>specie: {character.species}</p>
                            <p>alive: {character.status}</p>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}


