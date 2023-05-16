import "./Header.css";
import { NavLink } from "react-router-dom";
import HeaderNavList from "./HeaderNavList";

const Header = (props) => {
    // {console.log(props)}
    return (
        <header id="open" className="header">
            <div id="close" className="header-container _container">
                <NavLink to="/" className="header-logo">
                    <img src={props.logoToProps} alt="logo" />
                </NavLink>
                <div className="header-menu menu">
                    <div className="header-body">
                        <nav className="header-content">
                            <HeaderNavList navList={props.navList} />
                        </nav>
                    </div>

                    <div className="header-contacts">
                        <a
                            href="tel:+84993488216"
                            className="header-contacts-tel"
                        >
                            8 (499) 348-82-16
                        </a>
                        <a
                            href="mailto:hello@softerio.ru"
                            className="header-contacts-mail"
                        >
                            hello@softerio.ru
                        </a>
                    </div>
                    <div className="header-social social">
                        <div className="social-item">
                            <a
                                href="https://www.whatsapp.com/"
                                className="whatsapp"
                            >
                                <img
                                    src={props.whatsappToProps}
                                    alt="whatsapp"
                                />
                            </a>
                        </div>
                        <div className="social-item">
                            <a
                                href="https://web.telegram.org/z/"
                                className="telegram"
                            >
                                <img
                                    src={props.telegramToProps}
                                    alt="telegram"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="header-button">
                    <a href="#open" className="icon-menu">
                        <span></span>
                    </a>
                    <a href="#close" className="close-icon-menu">
                        {" "}
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
