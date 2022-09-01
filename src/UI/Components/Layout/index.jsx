import React from 'react';
import Footer from 'UI/Components/Footer';
import Header from 'UI/Components/Header';

const Layout=(props) => {
    return (
        <div style={{
            width: "94vw",height: "100vh",margin: "0 auto",
        }}>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;
