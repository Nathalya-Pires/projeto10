import GlobalStyle from "./css/GlobalStyle";
import Header from "./Header";
import Movies from "./Movies";
import { Route, Routes, BrowserRouter } from "react-router-dom";


export default function App() {
    
    return(
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Movies/>}/>
                        
        </Routes>
        </BrowserRouter>
        </>
    )
}