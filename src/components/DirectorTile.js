import React from 'react';

function DirectorTile( { director } ) {
    return (
        <div>
            <p>{director.name}</p>
            <p>Movies:</p>
            <ul>
                {director.movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>
        </div>
    )
}

export default DirectorTile