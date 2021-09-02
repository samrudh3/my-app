import React from "react";
import "./MovieList.css";
import UpVote from "../vectors/UpVote.svg";
import DownVote from "../vectors/DownVote.svg";

const MovieList = ({ name, genre, director, views, votes, poster, star }) => {
  return (
    <div className="container-bgm">
      <div className="innerContainer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <img src={UpVote} style={{ width: "40px" }} />{" "}
          <span style={{ fontSize: "26px" }}>{votes}</span>
          <img src={DownVote} style={{ width: "40px" }} />
          <p>Votes</p>
        </div>
        <div className="img-container">
          <img className="img-bg" src={poster} />
        </div>
        <div style={{ alignSelf: "center" }}>
          <p className="h1">{name}</p>
          <p>
            {" "}
            <span className="text-secondary">Genre: </span>
            {genre}
          </p>

          {director.map((dname) => (
            <p>
              {" "}
              <span className="text-secondary">Director: </span> {dname}
            </p>
          ))}
          <p>
            {" "}
            <span className="text-secondary">Views: </span>
            {views}
          </p>
          {/* <p>
            {" "}
            <span className="text-secondary">Votes: </span>
            {votes}
          </p> */}
          {star.map((sname) => (
            <p>
              {" "}
              <span className="text-secondary">Star: </span>
              {sname}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
