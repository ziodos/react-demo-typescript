import { useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import AlbumSearch from './AlbumSearch'

const AlbumList = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    return (
        <>
            <h1>Debounce example</h1>
            <p>Start typing some book name. Search starts at length 5</p>
            <input
                className="search-input"
                type="text"
                placeholder="Search books"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <AlbumSearch searchTerm={debouncedSearchTerm} />
        </>
    )
}

export default AlbumList
