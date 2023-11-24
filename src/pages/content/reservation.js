import { useState } from "react";
const ReserComp=()=>{

    const[inputs,setInputs]=useState({});
    const[date,setDate]=useState({da:""});
    const [list,setList] = useState([]);

    const changeName=(e)=>{
        let {name,value}=e.target;
        setInputs({...inputs,[name]:value});
    }

    const changeSubmit=(event)=>{
        event.preventDefault();
        const addList =<p>{inputs.name} booked on {inputs.date}, {inputs.time} for {inputs.guest} guest.</p>;
        setList([...list,addList]);
        setInputs({});
        event.target.reset();
    }

    const pad=(num,dig)=>String(num).padStart(dig,'0');
    const todayDate=()=>{
        const dt = new Date();
        let date = `${dt.getFullYear()}-${pad(dt.getMonth()+1,2)}-${pad(dt.getDate(),2)}`;
        setDate({da:date});
    }

    return(
        <div className="reserve">
            <h1>Reservation</h1>
            <div className="resForm">
                <form method="post" onSubmit={changeSubmit}>                    
                    <label htmlFor="name"> Name : </label>
                    <input type="text" name="name" placeholder="Name" value={inputs.name || ""} required onChange={changeName}/><br/>
                    <label htmlFor="date"> Date : </label>
                    <input type="date" name="date" value={inputs.date || ""} min={date.da} onFocus={todayDate} required onChange={changeName}/><br/>
                    <label htmlFor="time"> Timing : </label>
                    <input type="time" name="time" value={inputs.time || ""} min="11:00" max="22:00" required onChange={changeName}/><br/>
                    <label htmlFor="guest"> Guests : </label>
                    <input type="number" name="guest" min="1" max="50" value={inputs.guest || 0} required onChange={changeName}/><br/>
                    <input type="checkbox" id="tc" required/>
                    <label htmlFor="tc" className="tc"><a href="#a"> I Agree to the Terms & Condition </a></label><br/>
                    <button type="submit" className="rbtn">Book Now</button>                       
                </form>
            </div>
            <div className="canply">
                <p><span> Cancellation policy </span> - While you won't be charged if you need to cancel, we ask that you do so at least 24 hours in advance.</p>
                <span>{list}</span>
            </div>
        </div>
    );
}
export default ReserComp;