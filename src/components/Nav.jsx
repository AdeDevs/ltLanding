import { useState, useEffect } from "react"
import logo from "../assets/lautalk.png"

export default function NavBar() {
    const [isMenuActive, setIsMenuActive] = useState(false)

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive)
    }
    useEffect(() => {
        if(isMenuActive) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }, [isMenuActive])
    return (
        <div className="nav-bar">
            <nav className="navigation">
                <img className="logo" src={logo} alt="logo" />
                <form>
                <input type="text" placeholder="Want to make payment or purchase anything?"/>
                <button id="srch-btn"></button>
                </form>
                <ul className="desk-nav">
                    <a href="" id="crt-talks"> <span></span> create talks</a>
                    <a href="">log in</a>
                    <a href="" id="sign">sign up</a>
                </ul>
                <li className="menu-btn" onClick={toggleMenu}><ion-icon id="tog" name="menu-outline" /></li>
                <div className={`overlay ${isMenuActive ? "active" : ""}`} onClick={toggleMenu}></div>
                <ul className={`mob-nav ${isMenuActive ? "active" : ""}`}>
                    <li className="menu-btn mob-btn" onClick={toggleMenu}><ion-icon id="tog" name="close-outline" /></li>
                    <a  href="#" onClick={toggleMenu} id="crt-talks"> <span></span> create talks</a>
                    <a href="#" onClick={toggleMenu} >log in</a>
                    <a  href="#" onClick={toggleMenu} id="sign">sign up</a>
                </ul>
            </nav>
        </div>
    )
}