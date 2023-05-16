import './Order.css';
import {Button} from '../../Button/Button';

const Order = (props) => {
    return(
        <section id='order' className='order'>
            <div className='order_container'>
                <div className='order-block-text'>
                    <h2 className='block-text-title'>Заказать приложение</h2>
                </div>
                <div className='order-content'>
                    <div className='order-items'>
                        <div className='order-column order-column-1'>
                            <div className='order-item item-order'>
                                <p className='item-order-text'>Бюджет проекта:</p>
                                <div className='order-price-items'>
                                    <div className='order-price-item'>20 000 — 50 000 руб.</div>
                                    <div className='order-price-item'>50 000 — 100 000 руб.</div>
                                    <div className='order-price-item'>100 000 — 500 000 руб.</div>
                                    <div className='order-price-item'>500 000 — 1 000 000 руб.</div>
                                    <div className='order-price-item'>1 000 000 руб. — 2 000 000 руб.</div>
                                    <div className='order-price-item'>2 000 000 руб. — 3 000 000 руб.</div>
                                </div>
                            </div>
                        </div>
                        <div className='order-column order-column-2'>
                            <div className='order-item item-order'>
                                <p className='item-order-text'>Контакты:</p>
                                <form>
                                    <input type='text' name='name' value="name" placeholder='Имя'/>
                                    <input type='phone' name='phone' value="phone" placeholder='Телефон'/>
                                    <textarea cols="50" rows="4" placeholder='Комментарий'></textarea>
                                </form>
                                <Button text={props.button[4].name} style={props.button[4].style}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Order;