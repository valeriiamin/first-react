import { Button } from "../../Button/Button";

const PricesCard = (props) => {
    return (
        <div className={props.card.class}>            
                <div className="prices-item item-prices">
                    <div className="item-prices-header">
                        <div className="item-prices-img">
                            <img src={props.card.icon} alt="icon" />
                        </div>
                        <h4 className="item-prices-title">{props.card.title}</h4>
                    </div>
                    <div className="item-prices-content">
                        <ul className="item-prices-list">
                            <li className="prices-li">
                                <p className="prices-text">
                                    {props.card.li1}
                                </p>
                                <img src={props.card.check} alt="check"/>
                            </li>
                            <li className="prices-li">
                                <p className="prices-text">{props.card.li2}</p>
                                <img src={props.card.check} alt="check"/>
                            </li>
                            <li className="prices-li">
                                <p className="prices-text">{props.card.li3}</p>
                                <img src={props.card.check} alt="check"/>
                            </li>
                            <li className="prices-li">
                                <p className="prices-text">{props.card.li4}</p>
                                <img src={props.card.check} alt="check"/>
                            </li>
                            <li className="prices-li">
                                <p className="prices-text">{props.card.li5}</p>
                                <img src={props.card.check} alt="check"/>
                            </li>
                        </ul>
                        <div className="item-prices-price">{props.card.price}</div>
                        <Button
                                        text={props.button.name}
                                        style={props.button.style}
                                    />
                    </div>
                </div>
            
        </div>
    );
};

export default PricesCard;
