
const StepsCard = ({card}) => {
    return(
        <div className={card.class}>
                            <div className="steps-item item-steps">
                                <div className="item-steps-img">
                                    <img
                                        src={card.icon}
                                        alt="icon"
                                    />
                                </div>
                                <div className="item-steps-title">
                                    {card.title}
                                </div>
                                <div className="item-steps-text">
                                    {card.text}
                                </div>
                            </div>
                        </div>
    )
};

export default StepsCard;