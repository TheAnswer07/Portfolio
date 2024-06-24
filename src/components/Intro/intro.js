import React from "react";
import "./intro.css";
import bg from "../../assets/mypic.jpeg";
import btnImg from "../../assets/connect.png"
import { Link } from 'react-scroll';


const Intro = () => {
    return (
        <section id="intro">
<div className="introContent">
<span className="hello">Hello,</span>
<span className="introText">I'm <span className="introName">Moussa</span> <br/>Website Designer</span>
<p className="introPara">
<br/>I'm constantly looking for excellence <br/>in the execution of operations 
<br/>and the achievement of <br/>pre-established objectives.</p>
<Link> <button className="btn"><img src={btnImg} alt="hireMeImg" className="btnImg"/>Hire Me</button></Link>
</div>

<img src={bg} alt="myPic" className="bg" />


        </section>
    )
};

export default Intro;


// I'm a well rounded and results oriented <br/>International Trade, 
// Web Development & <br/>UI/UX Design Professional, <br/>with a track record 
// of success <br/>delivering projects and improving <br/>operational performances. 
// <br/>
// <br/>I quickly adapt to any type of <br/>business environment, with a <br/>superior sense of
// organization <br/>and a great ability to manage <br/>cross-functional teams. 
// <br/>
// <br/>I speak and write fluently in French, <br/>English and Spanish.
// <br/> 