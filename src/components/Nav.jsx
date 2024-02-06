import React from 'react'
import img from '../images/WD.png'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="navbar">
                        <div className="left">
                            <img src={img} alt="" />
                        </div>
                        <div className="right">
                            <Link to={`/`}>ГЛАВНАЯ</Link>
                            <Link to={`/`}>ОБ АВТОРЕ</Link>
                            <Link to={`/`}>РАБОТЫ</Link>
                            <Link to={`/`}>ПРОЦЕСС</Link>
                            <Link to={`/`}>КОНТАКТЫ</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav