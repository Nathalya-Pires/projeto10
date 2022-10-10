import styled from "styled-components";
import Hour from "./Hour";


export default function ContainerTime({day}) {
    const showtimes = day.showtimes;

    return(
        <>
        <ContainerSessions>
            <p>{day.weekday} - {day.date}</p>
        </ContainerSessions>
        <ContainerHour>
            {showtimes.map ((s) => <Hour hour={s.name} index={s} key={s.id}/>)}
            </ContainerHour>
        </>
    )
}

const ContainerSessions = styled.div`
    display: flex;
    margin: 24px;

`

const ContainerHour = styled.div`
    display: flex;
    margin-left: 24px;
    

`
