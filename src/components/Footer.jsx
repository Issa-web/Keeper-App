import React from 'react'

function Footer() {

    let today = new Date()
    let currentYear = today.getFullYear()
    return (
        <footer>
            <p className="p">Copyright  {currentYear}</p> 
        </footer>
      
    )
}

export default Footer
