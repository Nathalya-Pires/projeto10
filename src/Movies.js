import { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import Movie from './Movie';
import { Link } from "react-router-dom"

export default function Movies() {
    const [listMovies, setListMovies] = useState([]);
    

    useEffect(() => {
        const linkURL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
        const promise = axios.get(linkURL);

        promise.then((resposta) => {
            setListMovies(resposta.data);
        })

    }, [])

    console.log(listMovies);
    
    return (
        <>
            <SelectMovie>
            <p>Selecione o filme</p>
            </SelectMovie>
            <ContainerMovies>
                {listMovies.map((lm) => <Link to={`/movies/${lm.id}`} key={lm.id}> <Movie listMovies={lm} /> </Link>)}
            </ContainerMovies>

        </>
    )

}

const ContainerMovies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`

const SelectMovie = styled.div`
    height: 110px;
    margin-top: 67px;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-align: center;
    }
`