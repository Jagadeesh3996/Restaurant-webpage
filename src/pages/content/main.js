import { Link } from "react-router-dom";

const HomeComp=()=>{
    return<>
        <div className="home">
            <div className="hcontent">
                <p>HI, Welcome to</p>
                <h1>Food Place</h1>
                <Link to="/menu">Today Special</Link>
            </div> 
        </div>
        <AboutComp/>
    </>
}

const AboutComp=()=>{
    return(
        <div className="about">
            <h1> our story :</h1>
            <p className="pro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus hic aperiam non atque quae cupiditate. Autem tempora cumque, accusantium deleniti sunt, nulla impedit dolore incidunt natus nostrum reiciendis ullam quidem.</p>
            <p className="pro pro2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus hic aperiam non atque quae cupiditate. Autem tempora cumque, accusantium deleniti sunt, nulla impedit dolore incidunt natus nostrum reiciendis ullam quidem.</p>
            <p className="pro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus hic aperiam non atque quae cupiditate. Autem tempora cumque, accusantium deleniti sunt, nulla impedit dolore incidunt natus nostrum reiciendis ullam quidem.</p>
            <p className="pro pro2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus hic aperiam non atque quae cupiditate. Autem tempora cumque, accusantium deleniti sunt, nulla impedit dolore incidunt natus nostrum reiciendis ullam quidem.</p>
        </div>
    );
}

const NoPage=()=><h1>404 page not found</h1>;

export default HomeComp;
export {AboutComp, NoPage};