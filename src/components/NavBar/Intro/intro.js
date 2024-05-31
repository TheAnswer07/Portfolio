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
<p className="introPara">I'm a well rounded and results oriented International Trade, 
<br/>Web Development & UI/UX Design Professional, with a track record 
<br/>of success delivering projects and improving operational performances. 
<br/>
<br/>I quickly adapt to any type of business environment, with a superior sense of
<br/>organization and a great ability to manage cross-functional teams. 
<br/>
<br/>I speak and write fluently in French, English and Spanish.
<br/> 
<br/>I'm constantly looking for excellence in the execution of operations 
<br/>and the achievement of pre-established objectives.</p>
<Link> <button className="btn"><img src={btnImg} alt="hireMeImg" className="btnImg"/>Hire Me</button></Link>
</div>

<img src={bg} alt="myPic" className="bg" />


        </section>
    )
};

export default Intro;