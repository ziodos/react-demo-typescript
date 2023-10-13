import React, { useState, useEffect, FC } from 'react'
import { useSearchProductsQuery } from './albumsSlice'

type BookSearchResultsProps = {
    searchTerm: string
}

const AlbumSearch: FC<BookSearchResultsProps> = ({
    searchTerm,
}: BookSearchResultsProps) => {
    const [filteredSearchTerm, setFilteredSearchTerm] = useState(searchTerm)
    const { data, error, isLoading, isFetching } =
        useSearchProductsQuery(filteredSearchTerm)
    const books = data ?? []

    useEffect(() => {
        setFilteredSearchTerm(searchTerm)
    }, [searchTerm])

    if (error) {
        return <div className="text-hint">Error while fetching books</div>
    }

    if (isLoading) {
        return <div className="text-hint">Loading books...</div>
    }

    if (isFetching) {
        return <div className="text-hint">Fetching books...</div>
    }

    if (books.length === 0) {
        return <div className="text-hint">No books found</div>
    }

    return (
        <ul>
            {books.map(({ id, brand, category, description }) => (
                <li key={id}>
                    {brand}: {category}, {description}
                </li>
            ))}
        </ul>
    )
}

export default AlbumSearch
