import React, {useState} from "react";
import style from "./Paginator.module.css"
import arrowPrev from "../../../assets/img/arrowPrew.png";
import arrowNext from "../../../assets/img/arrowNext.png";

const Paginator = (props) => {
    const prevSlide = () => {
        props.slidePrev()
    };
    const nextSlide = () => {
        props.slideNext()

    };
    const currentSlide = () => {

    };
    return (
        <div className={style.slider_nav_btns}>
            <div className={style.slider_nav}>
                <div className={props.color == "blue" ? style.slider_nav_item_2 : style.slider_nav_item} onClick={currentSlide}/>
                <div className={props.color == "blue" ? style.slider_nav_item_2 : style.slider_nav_item} onClick={currentSlide}/>
                <div className={props.color == "blue" ? style.slider_nav_item_2 : style.slider_nav_item} onClick={currentSlide}/>
                <div className={props.color == "blue" ? style.slider_nav_item_2 : style.slider_nav_item} onClick={currentSlide}/>
            </div>
            <div className={style.buttons}>
                <button className={props.color == "blue" ? style.button_2 : style.button} onClick={prevSlide}>
                    <div><img className={style.button_img} src={arrowPrev} alt=""/></div>
                </button>
                <button className={props.color == "blue" ? style.button_2 : style.button} onClick={nextSlide}>
                    <img src={arrowNext} alt=""/>
                </button>
            </div>
        </div>
    )
};

export default Paginator