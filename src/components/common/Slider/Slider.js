import React, {Component} from 'react';
import style from "./Slider.module.css"
import Carousel, {consts} from "react-elastic-carousel";
import arrowPrev from "../../../assets/img/arrowPrew.png";
import arrowNext from "../../../assets/img/arrowNext.png";


class CustomSlider extends Component {
    render() {
        if (this.props.items != undefined) {
                this.items = this.props.items.map(item => <div key={item.id} className={style.client}
                                                               style={{backgroundImage: `url(${item.image})`}}/>)
            }
        return (
            <div>
                <Carousel ref={ref => (this.carousel = ref)}
                          showArrows={false}
                          pagination={false}>
                   <div>{this.items}</div>
                    <div>{this.items}</div>
                </Carousel>
                <div className={style.slider_nav_btns}>
                    <div className={style.slider_nav}>
                        <div className={this.props.color == "blue" ? style.slider_nav_item_2 : style.slider_nav_item}/>
                        <div className={this.props.color == "blue" ? style.slider_nav_item_2 : style.slider_nav_item}/>
                        <div className={this.props.color == "blue" ? style.slider_nav_item_2 : style.slider_nav_item}/>
                        <div className={this.props.color == "blue" ? style.slider_nav_item_2 : style.slider_nav_item}/>
                    </div>
                    <div className={style.buttons}>
                        <button className={this.props.color == "blue" ? style.button_2 : style.button}
                                onClick={() => this.carousel.slidePrev()}>
                            <div><img src={arrowPrev} alt=""/></div>
                        </button>
                        <button className={this.props.color == "blue" ? style.button_2 : style.button}
                                onClick={() => this.carousel.slideNext()}>
                            <img src={arrowNext} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomSlider