import React from "react";
import "./skills.css";
import UIDesign from "../../assets/uiuxDesign.png";
import WebDesign from "../../assets/webDesign.png";
import AppDesign from "../../assets/appDesigns.png";


const skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">About Me</span>
            <span className="skillDescription">I'm a well rounded and results oriented <br />International Trade,
                Web Development & <br />UI/UX Design Professional, <br />with a track record
                of success <br />delivering projects and improving <br />operational performances.</span>

            <div className="skillBars">

                <div className="skillBar">
                    <img src={UIDesign} className="skillBarImg" alt="UI UX Design" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p></p>
                    </div>

                    <div className="skillBar">
                        <img src={WebDesign} className="skillBarImg" alt="Web Design" />
                        <div className="skillBarText">
                            <h2>Web Design</h2>
                            <p></p>
                        </div>
                    </div>

                    <div className="skillBar">
                        <img src={AppDesign} className="skillBarImg" alt="App Design" />
                        <div className="skillBarText">
                            <h2>App Design</h2>
                            <p></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default skills;