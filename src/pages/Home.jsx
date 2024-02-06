import React from 'react'
import Nav from '../components/Nav'
import img1 from '../images/Frame.svg'
import img2 from '../images/numbers__item.svg'
import img3 from '../images/Rectangle 5.svg'
import img4 from '../images/play-button.svg'
import img5 from '../images/projects.svg'
import { Input } from 'antd';
import Footer from '../components/Footer'






const { TextArea } = Input;
const Home = () => {
  return (
    <>
    <Nav/>

    <header>
        <div className="container">
           <div className="headerbar">
           <div className="left1">
                <img src={img1} alt="" />
            </div>
            <div className="right1">
                <h1>Дизайн и верстка</h1>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и <br /> вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов <br /> на латинице с начала XVI века.</p>
                <button>НАПИСАТЬ МНЕ</button>
            </div>
           </div>
        </div>
    </header>


    <div className="container">
        <div className="aboutme">
            <h1>Обо мне</h1>
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и <br /> вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов <br /> на латинице с начала XVI века.</p>
        </div>
    </div>

        <div className="aboutme2">
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
        </div>

        <section>
            <img className='img1' src={img4} alt="" />
        <div className="container">
            <div className="sectionbar">
                <h1>Как я работаю</h1>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и <br /> вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов <br /> на латинице с начала XVI века.</p>
                <img src={img3} alt="" />
            </div>
        </div>
        </section>

        <div className="image">
            <img src={img5} alt="" />
        </div>

        <aside>
            <div className="container">
                <div className="asidebar">
                    <h1>Хотите веб-сайт?</h1>
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и <br /> вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов <br /> на латинице с начала XVI века.</p>
                </div>
                <div className="name">
                    <input type="text" placeholder='Ваше имя' />
                    <input type="email" placeholder='Ваш e-mail' />
                </div>
                <TextArea className='inp1' placeholder='Сообщение' rows={4} />
                <br />
                <br />
                <button className='btn2'>ОТПРАВИТЬ</button>
            </div>
        </aside>

        <Footer/>
    </>
  )
}

export default Home