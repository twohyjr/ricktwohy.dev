import React from 'react'

import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            This is the Home page
            <br />
            <Link to="/contact">Contact</Link>
            <br />
            <Link to="/woodshop">Woodshop</Link>
        </div>
    )
}

export default HomePage
