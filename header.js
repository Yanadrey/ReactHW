import React from 'react';
import './style.css';

const Header = () => {
    return (
        <header className="header center">
            <div className="header__left">
                <a href="index.html"><img src="img/logo.png" alt="logo" /></a>
                <a href="#"><img src="img/search.svg" alt="search" /></a>
            </div>
            <nav className="header__right">
                <a href="catalog.html"><img src="img/menu.svg" alt="menu" /></a>
                <a href="registration.html"><img src="img/reg.svg" alt="reg" /></a>
                <a href="cart.html"><img src="img/cart.svg" alt="cart" /></a>
            </nav>
        </header>
    );
}

const MainSection = () => {
    return (
        <section className="head center">
            <h2 className="head__heading">NEW ARRIVALS </h2>
            <div className="breadcrumb">
                <div className="breadcrumb__box-link"><a className="breadcrumb__link" href="index.html">HOME</a></div>
                <div className="breadcrumb__box-link"><a className="breadcrumb__link" href="#">MEN</a></div>
                <div className="breadcrumb__box-link"><a className="breadcrumb__link" href="#">NEW ARRIVALS</a></div>
            </div>
        </section>
    );
}

const App = () => {
    return (
        <>
            <Header />
            <MainSection />
        </>
    );
}

export default App;