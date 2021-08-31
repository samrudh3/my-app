import React from 'react'
import './MovieList.css'

const MovieList = ({ name, genre, director, views, votes, poster, star }) => {
    return (
        <div className="container-bgm">
            <div className="innerContainer">
                <div className="img-container">
                    <img className="img-bg" src={poster} />
                </div>
                <div>
                    <p className="h1">{name}</p>
                    <p> <span className="text-secondary">Genre: </span>{genre}</p>

                    {director.map((dname) => (
                        <p> <span className="text-secondary">Director: </span> {dname}</p>
                    ))}
                    <p> <span className="text-secondary">Views: </span>{views}</p>
                    <p> <span className="text-secondary">Votes: </span>{votes}</p>
                    {star.map((sname) => (
                        <p> <span className="text-secondary">Star: </span>{sname}</p>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default MovieList
