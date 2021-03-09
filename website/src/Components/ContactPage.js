import React from 'react'

import { Link } from 'react-router-dom'

const ContactPage = () => {
    return (
        <div>
            This is the Contact page
            <br />
            <Link to="/home">Home</Link>
            <br />
            <Link to="/woodshop">Woodshop</Link>
        </div>
    )
}

export default ContactPage
