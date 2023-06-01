'use client'
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {

  const [movilMenuOpen, setMovilMenuOpen] = useState(false);
  const [movilMenuIcon, setMovilMenuIcon] = useState('menu');
  const [selected, setSelected] = useState(null);

  const menuMovilClick = () => {
    setMovilMenuOpen(!movilMenuOpen);
    if (movilMenuOpen) {
      setMovilMenuIcon('menu');
    } else {
      setMovilMenuIcon('close');
    }
  };

  const menuMovilClose = () => {
    setMovilMenuOpen(false);
    setMovilMenuIcon('menu');
  }

  const activeBar = (index) => {
    setSelected(index);
  }


  return (
    <>
      <header className="header-page" itemScope="itemscope">
        <div className="head-container">
          <div className="container__item">
            <div className="item__button_menu">
              <a className="item-button-menu__href" onClick={menuMovilClick}>
                <div className="item-button-menu__container">
                  <i className="material-icons">{movilMenuIcon}</i>
                </div>
              </a>
            </div>
            <Link href="/" onClick={() => setSelected(null)} className="item__logo">
              <img className="logo__img" src="/img/logo.png" alt="logo"></img>
            </Link>
            <div className="item__div">
              <Link href="/" onClick={() => setSelected(null)} className="div__text">
                <span>Capital Tours</span>
              </Link>
            </div>
            <nav id="id-menu" className={movilMenuOpen ? "item__menu open" : "item__menu"}>
              <ul className="menu_ul">
                <li className="ul__li">
                  <Link href="/" onClick={() => {activeBar(0), menuMovilClose()}}
                    className={selected === 0 ? "li__text active" : "li__text"}>Inicio</Link>
                </li>
                <li className="ul__li">
                  <Link href="/nosotros" onClick={() => {activeBar(1), menuMovilClose()}}
                    className={selected === 1 ? "li__text active" : "li__text"}>Nosotros</Link>
                </li>
                <li className="ul__li">
                  <Link href="/descargas" onClick={() => {activeBar(2), menuMovilClose()}}
                    className={selected === 2 ? "li__text active" : "li__text"}>Descargas</Link>
                </li>
                <li className="ul__li">
                  <Link href="/solicitar" onClick={() => {activeBar(3), menuMovilClose()}}
                    className={selected === 3 ? "li__text active" : "li__text"}>Solicitar</Link>
                </li>
                <li className="ul__li">
                  <Link href="/servicios" onClick={() => {activeBar(4), menuMovilClose()}}
                    className={selected === 4 ? "li__text active" : "li__text"}>Servicios</Link>
                </li>
                <li className="ul__li">
                  <Link href="/requisitos" onClick={() => {activeBar(5), menuMovilClose()}}
                    className={selected === 5 ? "li__text active" : "li__text"}>Requisitos</Link>
                </li>
              </ul>
            </nav>
            <div className="item__action">
              <div className="action-container">
                <div className="action__control">
                  <div className="control__container">
                    <div className="container__text cl-session">
                      <Link href="/consulta" className="li__text">Consulta</Link>
                    </div>
                    <div className="container__icon">
                      <Link href="/consulta" className="material-icons">search</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header >
    </>
  )
}
