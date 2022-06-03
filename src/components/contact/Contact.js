import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs"
import './Contact.css'

function Contact({contact}){
    const [click, setClick] = useState(contact);

    function closeContactUs() {
        console.log(click)
        console.log(click);
        setClick(!click)
        contact(click);
      }

    return(
        <div className="contact__info">
            <div className="contact__empty"></div>
            <div className="contact__container">
                <button onClick={closeContactUs} className="button">
                    <BsArrowRight />
                </button>
                <div className="form__container">
                    <div className="form__header">
                        <p>
                            Hey, we are still in works,<br /> but you can send us a message!
                        </p>
                    </div>
                    <form>
                        <div className="inputField">
                            <label htmlFor="">First name</label>
                            <input type="text" placeholder="Enter your First Name" />
                        </div>
                        <div className="inputField">
                            <label htmlFor="">Lastname</label>
                            <input type="text" placeholder="Enter your Last Name" />
                        </div>
                        <div className="inputField">
                            <label htmlFor="">Email address</label>
                            <input type="text" placeholder="Enter your Email Address" />
                        </div>
                        <div className="inputField">
                            <label htmlFor="">Tell Us What You Need Help With:</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Enter a Topic Like 'Channel Problem...'"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;