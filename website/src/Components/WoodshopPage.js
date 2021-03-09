import React from 'react'

import { Link } from 'react-router-dom'

const WoodshopPage = () => {
    return (
        <div>
            This is the Woodshop page
            <br />
            <Link to="/contact">Contact</Link>
            <br />
            <Link to="/home">Home</Link>
        </div>
    )
}

export default WoodshopPage
