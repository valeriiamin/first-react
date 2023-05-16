import "./App.css";
import Header from "./Header/Header";
import Development from "./main/Section-development/Development";
import Services from "./main/Section-services/Services";
import Steps from "./main/Section-steps/Steps";
import Prices from "./main/Section-prices/Prices";
import Tasks from "./main/Section-tasks/Tasks";
import Order from "./main/Section-order/Order";
import {Navlink, Route, Routes} from 'react-router-dom';

const App = (props) => {
    return (
        <div className="wrapper">
            <Header
                navList={props.data.header.navList}
                logoToProps={props.data.header.logo}
                telegramToProps={props.data.header.telegram}
                whatsappToProps={props.data.header.whatsapp}
            />
            <main className="main">
            <Routes>
                <Route path="/development" element={<Development mainToProps={props.data.main.canvas}
                    rocketToProps={props.data.main.rocket}
                    winToProps={props.data.main.win}
                    buttonsToProps={props.data.buttons}/>}/>
                <Route path="/services" element={<Services services={props.data.main.services} />}/>
                <Route path="/steps" element={<Steps steps={props.data.main.steps} buttonToProps={props.data.buttons} />}/>
                <Route path="/prices" element={<Prices buttons={props.data.buttons}/>}/>
                <Route path="/order" element={<Order button={props.data.buttons} />}/>
            </Routes>
                <Development
                    mainToProps={props.data.main.canvas}
                    rocketToProps={props.data.main.rocket}
                    winToProps={props.data.main.win}
                    buttonsToProps={props.data.buttons}
                />
                <Services services={props.data.main.services} />
                <Steps steps={props.data.main.steps} buttonToProps={props.data.buttons} />
                <Prices prices={props.data.main.prices} pricesLi={props.data.main.pricesLi} buttons={props.data.buttons}/>
                <Tasks />
                <Order button={props.data.buttons} />
            </main>
            <Header
                navList={props.data.header.navList}
                logoToProps={props.data.header.logo}
                telegramToProps={props.data.header.telegram}
                whatsappToProps={props.data.header.whatsapp}
            />
        </div>
    );
};

export default App;
