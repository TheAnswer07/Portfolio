import React from "react";
import "./skills.css";
import UIDesign from "../../assets/uiuxDesign.png";
import WebDesign from "../../assets/webDesign.png";


const skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">About Me</span>
            <span className="skillDescription">I'm a well rounded and results oriented International Trade,
                Web Development & UI/UX Design Professional, with a track record
                of success delivering projects and improving operational performances.</span>

            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} className="skillBarImg" alt="Web Design" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>You'll find below the links to my Web Development projects (click on each image to view the specific application). These projects were created with three (3) different teams from the University of California Berkeley Coding Boot Camp (Full Stack Flex Program - April/October 2022).</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={UIDesign} className="skillBarImg" alt="UI UX Design" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>You'll find below the links to my UI/UX projects based on case studies (click on each image to view the specific application). For these Desktop & Mobile Applications, I created the following: User Flows, Wireframes, Mood boards, Iconography, Typography, Prototyping, and Style guides.</p>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default skills;