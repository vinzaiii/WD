import React from 'react'
import img6 from '../images/footer__soc-buttons.svg'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="footerbar">
                <div className="left2">
                    <h3>Иванов Иван</h3>
                    <p>(с) 2018. Все права защищены.</p>
                </div>
                <div className="right2">
                    <img src={img6} alt="" />
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer