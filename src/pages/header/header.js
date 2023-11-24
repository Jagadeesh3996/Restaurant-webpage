
import { Outlet, Link } from "react-router-dom";

const HeaderComp=()=>{
    return(<>
        <header className="header">
            <input type="checkbox" id="check"></input>
            <label htmlFor="check" className="checkbtn">
                <i className="fa-solid fa-bars"/>
            </label>
            <div className="logo">
                <input type="checkbox" id="logo"></input>
                <label htmlFor="logo">food Place</label>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/home"><i className="fa-solid fa-house"/> Home </Link></li>
                    <li><Link to="/about"><i className="fa-solid fa-circle-info"/> About </Link></li>
                    <li><Link to="/menu"><i className="fa-solid fa-spoon"/> Menu </Link></li>
                    <li><Link to="/images"><i className="fa-regular fa-images"/> Gallery</Link></li>
                    <li><Link to="/reservation"><i className="fa-solid fa-users"/> Reservation</Link></li>
                    <li><Link to="/contact"><i className="fa-regular fa-address-card"/> Contact</Link></li>
                </ul>
            </nav>
        </header>
        <Outlet />
    </>);
}

export default HeaderComp;