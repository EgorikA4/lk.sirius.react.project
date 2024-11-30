import { Button } from '@consta/uikit/Button';
import { NavLink } from 'react-router-dom';
import { Layout } from '@consta/uikit/Layout';
import Menu from '../menu/Menu';
import React from 'react';

const Header = () => {
    return (
        <Layout>
            <Menu />
            <NavLink to='/profile'>
                <Button label='ФИО'></Button>
            </NavLink>
            <NavLink to='/login'>
                <Button label='Вход'></Button>
            </NavLink>
        </Layout>
    )
}

export default Header;