import React from 'react'

function ActorTile( { actor } ) {
    return (
        <div>
            <p>{actor.name}</p>
            <p>Movies:</p>
            <ul>
                {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>
        </div>
    )
}

export default ActorTile