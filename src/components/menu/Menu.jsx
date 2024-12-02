import { Button } from "@consta/uikit/Button";
import { NavLink, useLocation } from "react-router-dom";
import style from "./Menu.module.css"
import { getToken } from "../../services/token";



const Menu = () => {
    const {pathname} = useLocation()
    return (
        <div className={style.Menu}>
            <NavLink to='/' >
                <Button view={pathname==="/" ? "primary" : "secondary"} label='Главная страница'></Button>
            </NavLink>
            {getToken() ? <NavLink to='/service' activeclassname={style.active}>
                <Button view={pathname==="/service" ? "primary" : "secondary"}  label='Страница услуг'></Button>
            </NavLink> : ''}
        </div>
    );
}

export default Menu