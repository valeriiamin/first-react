import "./Development.css";
import { Button } from "../../Button/Button";

const Development = (props) => {
    return (
        <section id="development" className="development">
            <div className="development-block">
                <div className="development_container">
                    <div className="development-content">
                        <div className="development-block-text">
                            <div className="block-text">
                                <div className="text-title">
                                    <h1 className="dev block-text-title-white">Разработка мобильных<br /> приложений и сервисов
                                    </h1>
                                </div>

                                <div className="text-items">
                                    <div className="block-text-item">
                                        <div className="item-img">
                                            <img
                                                src={props.rocketToProps}
                                                alt="rocket"
                                            />
                                        </div>
                                        <div className="item-text">
                                            Знаем, как решить вашу задачу
                                            оптимальным <br />
                                            способом
                                        </div>
                                    </div>
                                    <div className="block-text-item">
                                        <div className="item-img">
                                            <img
                                                src={props.winToProps}
                                                alt="win"
                                            />
                                        </div>
                                        <div className="item-text">
                                            Подберем подходящее решение с учетом
                                            целей <br /> и возможностей
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="block-text-buttons">
                                <Button
                                    text={props.buttonsToProps[0].name}
                                    style={props.buttonsToProps[0].style}
                                />
                                <Button
                                    text={props.buttonsToProps[1].name}
                                    style={props.buttonsToProps[1].style}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="development-image">
                        <img
                            src={props.mainToProps[0].app}
                            
                            alt="app"
                        /> 
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Development;
