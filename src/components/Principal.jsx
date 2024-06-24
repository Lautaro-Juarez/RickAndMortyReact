import { useContext } from "react"
import { CharacterContext } from "../context/CharactersContext"
import { GridCharacters } from './GridCharacters'
import { SearchCharacters } from './SearchCharacters'
import { Pagination } from './Pagination'
import { CharacterFilter } from "./CharacterFilter"

export const Principal = () => {

    const { setSearch, pageNumber, setPageNumber, characters } = useContext(CharacterContext)

    return (
        <div className="container mt-10">
            <SearchCharacters setSearch={setSearch} />
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
            <CharacterFilter/>
            <GridCharacters characters={characters} />
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </div>
    )
}
