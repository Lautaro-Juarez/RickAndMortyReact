import { Children, useEffect, useState } from "react"
import { CharacterContext } from "./CharactersContext"
const initialUrl =  'https://rickandmortyapi.com/api/character/'

export const CharactersProvider = ({ children }) => {

    const [pageNumber, setPageNumber] = useState(1)
    const [search, setSearch] = useState('');
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState([]);


    /* se hace el llamado a la API para traer todos los personajes por defecto,
     y acá mismo se le aplica la busqueda si es que el usuario la hace junto a la paginación */

    const fetchCharacter = (url) => {
        fetch(url)
            .then(response => response.json())
            .then((data) => setCharacters(data.results))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchCharacter(`${initialUrl}?page=${pageNumber}&name=${search}`);
    }, [pageNumber, search])
    
    /* Llamado a la API para traer los personajes filtrados */

   /*  const filterCharacters = (url => { 
            fetch(url)
                .then(response => response.json())
                .then((data) => setCharacters(data.results))
                .catch(error => console.log(error))
    })
    useEffect(() => {
        filterCharacters(`${initialUrl}?name=morty&status=alive`);
    }, []) */

    return (
        <CharacterContext.Provider value={{
            pageNumber, 
            search, 
            setSearch, 
            characters, 
            setCharacters, 
            info, 
            setInfo, 
            setPageNumber, 
        }}> 
            {children}
        </CharacterContext.Provider>
    )
}


