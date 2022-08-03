import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

const Hero = () => {
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                {/* herder block */}
                <Header />

                {/* add block */}
                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* hero text block */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">shape </span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>ideal body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>

                {/* figure block */}
                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+ 50</span>
                        <span>fitness problems</span>
                    </div>
                </div>

                {/* button block */}
                <div className="hero-btn">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">

                {/* right button */}
                <button className="btn">Join Now</button>


                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span><span>116 bpm</span>
                </div>

                {/* hero-images */}
                <img src={hero_image} alt="" className="hero-img"/>
                <img src={hero_image_back} alt="" className="hero-back-img"/>

                {/* calories block */}
                <div className="calory">
                    <img src={Calories} alt="" className="calory-img" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;