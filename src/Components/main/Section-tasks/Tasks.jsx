import "./Tasks.css";

const Tasks = (props) => {
    return (
        <section id="tasks" className="tasks">
            <div className="tasks_container">
                <div className="tasks-block-text">
                    <h2 className="block-text-title">
                        Какие задачи поможет решить запуск мобильного приложения
                    </h2>
                </div>
                <div className="tasks-content">
                    <div className="tasks-items">
                        <div className="tasks-column column-1">
                            <div className="tasks-item item-tasks">
                                <div className="item-tasks-title">
                                    Повысить лояльность
                                </div>
                                <div className="item-tasks-text">
                                    Мобильное приложение работает намного
                                    быстрее сайта и может выполнять многие
                                    функции даже без интернета. Также здесь не
                                    нужно каждый раз авторизовываться, чтобы
                                    оформить заказ или отследить его статус. Все
                                    это создает положительный пользовательский
                                    опыт.
                                </div>
                            </div>
                            <div className="tasks-item item-tasks">
                                <div className="item-tasks-title">
                                    Автоматизировать продажи
                                </div>
                                <div className="item-tasks-text">
                                    С приложением легче провести пользователя по
                                    каждому этапу воронки продаж. С помощью
                                    автоматизации внутри интерфейса можно
                                    показывать ценность продукта, рассказывать о
                                    новых функциях, делать допродажи и
                                    напоминать о себе с помощью пуш-уведомлений.
                                </div>
                            </div>
                        </div>
                        <div className="tasks-column column-2">
                            <div className="tasks-item item-tasks">
                                <div className="item-tasks-title">
                                    Сократить издержки
                                </div>
                                <div className="item-tasks-text">
                                    Мобильный сервис помогает сэкономить на
                                    рекламном бюджете и дополнительных
                                    сотрудниках. Например, многие маркетинговые
                                    акции можно проводить в самом приложении и
                                    адаптировать рекламу под целевых
                                    пользователей, а часть работы службы
                                    поддержки делегировать автоматическим
                                    чат-ботам.
                                </div>
                            </div>
                            <div className="tasks-item item-tasks">
                                <div className="item-tasks-title">
                                    Увеличить прибыль
                                </div>
                                <div className="item-tasks-text">
                                    Повышение уровня клиентского сервиса,
                                    экономия на закупке рекламы на других
                                    площадках и автоматизации процессов
                                    положительно скажется и на итоговой выручке.
                                    Вложения в разработку приложения быстро
                                    окупятся, если интерфейс хорошо справляется
                                    со своими задачами.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tasks;
