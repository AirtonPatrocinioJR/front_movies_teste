import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Content.css';

import React from 'react'
// import axios from 'axios';

import Search from './Search';
import ListMovies from './ListMovies';

// const URL = "http://localhost:8000/api/movies/";

const Content = (props) => {
    // const [searche, setSearche] = useState("");

    return (
        <div className='content container'>
            <Search />
            <ListMovies />
        </div>
    )
}

export default Content