
const Contact=()=>{
    return(
        <div className="contact">
            <h1>Connect with us</h1>
            <form method="post">                    
                <label htmlFor="name"> Name : </label>
                <input type="text" name="name" placeholder="Enter your Name here" required /><br />
                <label htmlFor="email"> E-Mail : </label>
                <input type="email" name="email" placeholder="Enter your E-mail here" required /><br />
                <label htmlFor="msg">Message : </label>
                <textarea name="msg" className="msg" rows="5" placeholder="Enter your message here" required></textarea><br />
                <button type="submit" className="cbtn">Connect</button>                       
            </form>
        </div>
    );
}

export default Contact;