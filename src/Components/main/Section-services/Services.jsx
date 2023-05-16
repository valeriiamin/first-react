import "./Services.css";
import React, { useState } from "react";

const Services = (props) => {
    const [item1, setItem1] = useState("");
    const [itemVisible1, setItemVisible1] = useState(false);

    const [item2, setItem2] = useState("");
    const [itemVisible2, setItemVisible2] = useState(false);

    const [item3, setItem3] = useState("");
    const [itemVisible3, setItemVisible3] = useState(false);

    const handlerClick = (number) => {
        if (number === 1) {
            setItem1(
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quis odio earum repudiandae corrupti quisquam nesciunt repellat quaerat, minima iure, repellendus velit sit ut quos asperiores labore amet? Velit, hic."
            );
            setItemVisible1(!itemVisible1);
        } else if (number === 2) {
            setItem2(
                "Разрабатываем сайты персонально под ваш бизнес. Анализируем рынок и целевую аудиторию в соответствии с задачами, которые вы хотите решить с помощью веб-сайта. Создаём web-сервисы для любого направления бизнеса: продажи, коммуникации, управление, серверную часть и API, гибкие административные инструменты для управления приложениями и сборастатистики. Вы получаете продукт, привлекательный для пользователей и функциональный для вас."
            );
            setItemVisible2(!itemVisible2);
        } else if (number === 3) {
            setItem3(
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quis odio earum repudiandae corrupti quisquam nesciunt repellat quaerat, minima iure, repellendus velit sit ut quos asperiores labore amet? Velit, hic."
            );
            setItemVisible3(!itemVisible3);
        }
    };

    return (
        <section id="services" className="services">
            <div className="services_container">
                <div className="services-block-text block-text">
                    <h2 className="serv block-text-title">Наши услуги</h2>
                    <div className="block-text-text">
                        Разработка мобильных приложений и веб-проектов
                        <br /> для бизнеса и стартапов
                    </div>
                </div>
                <div className="services-items">
                    <div className="services-column services-column-1">
                        <div className="services-item item-services">
                            <div className="item-services-main">
                                <div className="item-services-icon">
                                    <img
                                        onClick={() => handlerClick(1)}
                                        src={props.services[0].phone}
                                        alt="phone"
                                    />
                                </div>
                                <div className="item-services-title">
                                    Разработка мобильных
                                    <br /> приложений
                                </div>
                                <div className="item-services-text">
                                    {itemVisible1 && <p>{item1}</p>}
                                </div>
                            </div>
                            <div className="item-services-box">
                                <div className="box-item">iOS</div>
                                <div className="box-item">Android</div>
                            </div>
                        </div>
                    </div>
                    <div className="services-column services-column-2">
                        <div className="services-item item-services">
                        <div className="item-services-main">
                            <div className="item-services-icon">
                                <img
                                    onClick={() => handlerClick(2)}
                                    src={props.services[3].web}
                                    alt="web"
                                />
                            </div>
                            <div className="item-services-title">
                                Web разработка
                            </div>
                            <div className="item-services-text">
                                {itemVisible2 && <p>{item2}</p>}
                            </div>
                            </div>
                            <div className="item-services-box">
                                <div className="box-item">Frontend</div>
                                <div className="box-item">Backend</div>
                            </div>
                        </div>
                    </div>
                    <div className="services-column services-column-3">
                        <div className="services-item item-services">
                        <div className="item-services-main">
                            <div className="item-services-icon">
                                <img
                                    onClick={() => handlerClick(3)}
                                    src={props.services[1].mobile}
                                    alt="mobile"
                                />
                            </div>
                            <div className="item-services-title">
                                Проектирование мобильного приложения
                            </div>
                            <div className="item-services-text">
                                {itemVisible3 && <p>{item3}</p>}
                            </div>
                            </div>
                            <div className="item-services-box">
                                <div className="box-item">Дизайн</div>
                                <div className="box-item">ТЗ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
