import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from './Store';
import './Search.css'
import loaderGif from '../imgs/load.gif'
import searchIcon from '../imgs/loupe.svg'

const URL = "http://localhost:8000/api/movies/";

const Searche = props => {
    const [searche, setSearche] = useState("");
    const [loaderCalss, setLoaderClass] = useState("loader")

    const { setLista } = useContext(AppContext)


    async function executar(value) {
        const dataSearche = { "title": value };
        console.log("===>" + value)
        setLoaderClass('loader show');
        axios({
            method: "POST",
            // timeout: 5000,
            headers: {
                "Content-Type": "application/json",
            },
            url: URL,
            data: JSON.stringify(dataSearche)
        }).then(
            function (data) {
                let dados = data.data
                setLista(dados.moviesByYear);
                // setTotal(dados.total);
                // total = data.data.total;
                // console.log('====>>>' + dados.total)
                // setTotal(data.data.total);
                // setLoaderClass('loader');
                // loader.classList.remove('show')
            }
        ).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
            // console.log(error)
            // setLoaderClass('loader');
        }).then(
            function () {
                setLoaderClass('loader');
            }
        );
    }

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            executar(searche)
        }
    }

    return (
        <div>
            <div className={loaderCalss}>
                <img src={loaderGif} alt="" />
            </div>
            <div className='search-box row'>
                <h2>Buscar filmes que contenham: {searche}</h2>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={searche}
                        onChange={(e) => setSearche(e.target.value)}
                        onKeyUp={keyHandler}
                        placeholder="Pesquisar" aria-describedby="enviar" />
                    <button className="btn btn-search" type="button" onClick={() => executar(searche)} id="enviar"><img src={searchIcon} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Searche