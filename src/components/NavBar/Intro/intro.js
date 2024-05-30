import React from "react";
import "./intro.css";
import bg from "../../../assets/mypic.jpeg";
import btnImg from "../../../assets/connect.png"
import { Link } from 'react-scroll';


const Intro = () => {
    return (
        <section id="intro">
<div className="introContent">
<span className="hello">Hello,</span>
<span className="introText">I'm <span className="introName">Moussa</span> <br/>Website Designer</span>
<p className="introPara">Well rounded and results oriented International Trade, Web Development 
<br/> & UI/UX Design Professional, with a track record of success delivering projects 
<br/>and improving operational performances. 
<br/>
<br/>Quickly adapts to any type of business environment, 
<br/>with a superior sense of organization, a great ability to manage
<br/>cross-functional teams. Speaks and writes fluently in French, English and Spanish.
<br/> 
<br/>Constantly looking for excellence in the execution of operations 
<br/>and the achievement of pre-established objectives.</p>
<Link> <button className="btn"><img src={btnImg} alt="hireMeImg"/>Hire Me</button></Link>
</div>

<img src={bg} alt="myPic" className="bg" />


        </section>
    )
};

export default Intro;