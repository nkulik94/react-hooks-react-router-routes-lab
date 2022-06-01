import React from 'react';

function MovieTile( { movie } ) {
    return (
        <div>
            <p>Title: {movie.title}</p>
            <p>Time: {movie.time}</p>
            <p>Genres:</p>
            <ul>
                {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
            </ul>
        </div>
    )
}

export default MovieTile