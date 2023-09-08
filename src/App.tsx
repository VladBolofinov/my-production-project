import {Link, Route, Routes} from "react-router-dom";
import Component from "./component/Component";
import './styles/index.scss';
import {AboutPageAsync} from "./pages/AboutPage/AboutPageAsync";
import {MainPageAsync} from "./pages/MainPage/MainPageAsync";
import {Suspense, useContext, useState} from "react";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./styles/helpers/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{hovered:true, selected: false,}, [theme,'cls2','cls3'])}>
            <button onClick={toggleTheme}>change theme</button>
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