import styled from "styled-components";


export default function Movie({listMovies}) {
    // console.log(listMovies)
    return(

        <ContainerImg>
            <img src={listMovies.posterURL} alt={listMovies.title} key={listMovies.id}/>
        </ContainerImg>

    )

}

const ContainerImg = styled.div`
    height: 209px;
    width: 145px;
    border-radius: 3px;
    border: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 11px;
    margin-left:30px ;
    padding: 8px;

    img {
        width: 100%;
        height: 100%;
    }

    &:hover {    
        cursor: pointer;
    }
`