import React from 'react'

const Footer = ({ length }) => {
    return (
        <footer>
            <p style={{backgroundColor : "steelblue"}}>{length} List {length === 1 ? "item" : "items"}</p>
        </footer>
    )
}

export default Footer