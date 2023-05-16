import "./Steps.css";
import { Button } from "../../Button/Button";
import StepsCard from "./StepsCard";

const Steps = (props) => {
    return (
        <section id="steps" className="steps">
            <div className="steps_container">
                <div className="steps-block-text">
                    <h2 className="block-text-title-white">Этапы разработки</h2>
                </div>
                <div className="steps-content">
                    <div className="steps-items">
                        {props.steps.map((card) => {
                            return <StepsCard card={card} key={card.id} />;
                        })}
                        <div className="steps-column steps-column-8">
                            <Button
                                text={props.buttonToProps[2].name}
                                style={props.buttonToProps[2].style}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Steps;
