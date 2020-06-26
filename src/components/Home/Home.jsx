import React, {Component} from "react";
import style from "./Home.module.css"
import homeBG from "./../../assets/img/home.png"
import {connect} from "react-redux";
import Paginator from "../common/Paginator/Paginator";
import Carousel from "react-elastic-carousel";


class Home extends Component {
    render() {
        let homeSlider = this.props.homeSlider
            .map(s => <div key={s.id} className={style.slider_item}>
                <div className={style.slider_title}>{s.title}</div>
            </div>);

        return (
            <div className={style.home} style={{backgroundImage: `url(${homeBG})`}}>
                <div className={style.appWrap}>
                    <Carousel className={style.carousel}
                              ref={ref => (this.carousel = ref)}
                              showArrows={false}
                              itemsToShow={1}
                              pagination={false}>
                        {homeSlider}
                    </Carousel>

                    <button className={style.pres_button}>Наша презентация</button>

                    <Paginator color="white" slidePrev={() => this.carousel.slidePrev()}
                               slideNext={() => this.carousel.slideNext()}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    homeSlider: state.home.homeSlider
});
export default connect(mapStateToProps, {})(Home)