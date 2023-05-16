import {NavLink} from 'react-router-dom';

const HeaderNavList = ({navList}) => {
    return (
        <ul className="menu-list">
        {
            navList.map(elem => {
                return(
                    <li className="menu-item" key={elem.id}>
                        <NavLink to={`${elem.route}`} className="menu-link">{elem.name}</NavLink>
                    </li>
                )
            })
        }
        </ul>
    )
};

export default HeaderNavList;