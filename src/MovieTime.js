import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";
import styled from "styled-components";
import ContainerTime from './ContainerTime';
import { Link } from "react-router-dom"

export default function MovieTime() {
    const [time, setTime] = useState([]);
    const [days, setDays] = useState([])
    const {idMovie} = useParams();
    console.log(days)

    useEffect (() => {
        const linkUrl = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`;
        const promise = axios.get(linkUrl);

        promise.then((resposta) => {
            setTime(resposta.data);
            setDays(resposta.data.days);
        })
    }, [idMovie])

    return(
        <>
            <SelectTime>
                <p>Selecione o horário</p>
            </SelectTime>
            <ContainerSessions>
                {days.map((d) => <ContainerTime key={d.id} day={d}/> )}
            </ContainerSessions>        
            <Footer>
                <img src={time.posterURL} alt="Imagem do Filme"/>
                <p>{time.title}</p> 
            </Footer>
        </>
    )

}

const SelectTime = styled.div`
    width: 100%;
    height: 110px;
    margin-left: 25px;
    padding-top: 70px;

    p{
        font-family:'Roboto', sans-serif;
        font-weight:400;
        font-size: 24px;
        color:#293845
    }

`
const ContainerSessions = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    padding-bottom: 150px;

`
const Footer = styled.div`
    height: 117px;
    width: 100%;
    background-color: #DFE6ED;
    display: flex;
    position: fixed;
    bottom: 0px;
    z-index: 2;
    padding: 14px 10px;

    img{
        width: 64px;
        border: 8px solid #FFFFFF;
        border-radius: 2px;
    }

    p {
        width: auto;
        font-family: 'Roboto', sans-serif;
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        margin: auto 10px;
    }

`
