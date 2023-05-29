import React from "react";
import propTypes from 'prop-types'

import "./Header.scss"

// icons:
import { ReactComponent as PrintIcon } from '../../assets/icons/print.svg'

const Header = ({ onClick }) => {
  return (
    <header>
        <div class="navbar">
            <a class="logo" href="index.html"><p>JOBSTART</p></a>
            <div class="drop">
                <button class="burger">&#9776</button>
                <div class="nav-list">
                    <a href="main.html">Главная</a>
                    <a href="index.html">Резюме</a>
                    <a href="interview.html">Собеседование</a>
                    <a href="team.html">Коллектив</a>
                    <a href="promotion.html">Повышение</a>
                    <a href="dismissal.html">Увольнение</a>
                </div>
            </div>
        </div>
    </header>
    // <header className='Header'>
    //   <div className='ui-container'>
    //     <div className='Header_content'>
    //       <span className='Header_logo'>jobstart</span>
    //       <button className='ui-button isLink' onClick={onClick}>
    //         <PrintIcon style={{ marginRight: '0.6rem' }} />
    //         Print
    //       </button>
    //     </div>
    //   </div>
    // </header>
  )
}

Header.propTypes = {
  onClick: propTypes.func,
}

Header.defaultProps = {
  onClick: () => {},
}

export default Header