import {Link, Route, Routes} from "react-router-dom";
import Component from "./component/Component";
import './index.scss';
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {Suspense} from "react";
const App = () => {
    return (
        <div className='app'>
            asdasdasdwad

            <Link to={'/main'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/main'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
            <Component/>
        </div>
    )
}
export default App;