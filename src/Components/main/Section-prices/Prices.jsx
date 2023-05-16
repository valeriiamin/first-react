import "./Prices.css";
import PricesCard from "./PricesCard";

const Prices = (props) => {
    return (
        <section id="prices" className="prices">
            <div className="prices_container">
                <div className="prices-block-text">
                    <h2 className="block-text-title">
                        Стоимость разработки мобильных приложений
                    </h2>
                    <div className="block-text-text">
                        Мы собрали стандартные элементы приложений в пакеты, для
                        примерного понимания стоимости разработки. Чтобы
                        заказать мобильное приложение свяжитесь с нами, мы вас
                        проконсультируем, проведем аудит ценовых предложений
                        других студий. Ниже цены на типовые приложения.
                    </div>
                </div>
                <div className="prices-content">
                    <div className="prices-items">
                        {props.prices.map((item) => {
                            return (
                                <PricesCard
                                    card={item}
                                    key={item.id}
                                    button={props.buttons[3]}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prices;
