import React, {useEffect,useState} from 'react'
import {Link} from "react-router-dom"
import axios from "axios";
import MovieList from './MovieList';
import './MovieList.css';
const Home = () => {

    const param = {
        category:"movies",
        language:"Kannada",
        genre:"all",
        sort: "voting"
    }
    // const [data,setData] = useState({
    //     name: "",
    //     director: [],
    //     genre:"",
    //     views:0,
    //     votes:0,
    //     star:[],
    //     poster:"",
    // });
    const [data,setData] = useState([]);
    useEffect(() => {
        axios.post("https://hoblist.com/movieList",param).then((response)=>{
            console.log(response);
            setData(response.data.result)

        } )
    }, [])
    return (
            <div className="home-container">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a className="navbar-brand text-white" href="#">Geek Synergy</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="services" >Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/info" >Company Info</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="contact" >Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="card-container">
                    {data.map((item) => (
                        <MovieList name={item.title} director={item.director} genre={item.genre} views={item.pageViews} votes={item.totalVoted} star={item.stars} poster={item.poster} />
                    ))}
                </div>
            </div>
    )
}

export default Home

