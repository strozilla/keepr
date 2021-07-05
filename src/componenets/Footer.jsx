import React from 'react';

function Footer(){
    const crYear = new Date().getFullYear();

    return (
    <footer>
        <p>&copy {crYear}</p>
    </footer>
    );
}
export default Footer;