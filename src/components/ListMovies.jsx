import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './Store';

import "./ListMovies.css"

const ListMovies = (props) => {
    const { lista } = useContext(AppContext)
    const [total, setTotal] = useState(0)
    var sum = 0
    const mostraLista = lista.map(lista => {
        sum = sum + lista.movies
        return (
            <li key={lista.year} className='list-group-item d-flex justify-content-between align-items-center bg-listfilmes'>
                <h6>{lista.year}</h6>
                <span className="badge bg-numfilmes rounded-pill">Filmes: {lista.movies}</span>
            </li>
        )
    })
    useEffect(function () {
        setTotal(sum)
    }, [sum])
    let vazia = lista.length === 0
    return (
        <div className="list-movies">
            {vazia ?
                // <div className="row justify-content-md-center">
                //     <div className="col-md-4 text-center p3">
                <h3> Não há filmes para listar</h3>
                //     </div>
                // </div>
                : <div className="justify-content-md-center">
                    <h2 className="text-center">Contagem de filmes por ano</h2>
                    <h5 className='total-filmes'>Total de Filmes: {total}</h5>
                    <ul className='list-group'>
                        {mostraLista}
                    </ul>
                </div>}
        </div >
    )
}

export default ListMovies