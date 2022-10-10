import GlobalStyle from "./css/GlobalStyle";
import Header from "./Header";
import Movies from "./Movies";
import MovieTime from "./MovieTime";
import Chairs from "./Chairs";
import { Route, Routes, BrowserRouter } from "react-router-dom";




export default function App() {
    
    return(
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Movies/>}/>
            <Route path="/movies/:idMovie" element={<MovieTime/>}/> 
            <Route path="/assentos/:idSessao" element={<Chairs/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}