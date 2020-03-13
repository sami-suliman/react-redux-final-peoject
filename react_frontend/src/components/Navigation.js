import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: '#ffb500',
    textDecoration: 'none',
    color: 'white'
}

const Navigation = () => (
    <div>
        <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
                background: 'gray'
            }}
        >
        Home</NavLink>

        <NavLink
            to="/orders"
            exact
            style={link}
            activeStyle={{
                background: 'gray'
            }}
        >
        Orders</NavLink>
    </div>
)

export default Navigation 