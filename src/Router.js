import { BrowserRouter , Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import List from "./components/List";
import Update from "./components/Update";

export default function Router(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route exact path='' element={<List />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/list" element={<List />} />
                <Route path="/update" element={<Update />} />
            </Routes>
        </BrowserRouter>
        </>
    );
}