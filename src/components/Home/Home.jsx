import React from "react";
import style from "./Home.module.css"
import homeBG from "./../../assets/img/home.png"
import {connect} from "react-redux";
import Paginator from "../common/Paginator/Paginator";


const Home = props => {
    let homeSlider = props.homeSlider
        .filter(s => s.id === 0)
        .map(s => <div key={s.id} className={style.slider_item}>
            <div className={style.slider_title}>{s.title}</div>
        </div>);

    return (
        <div className={style.home} style={{backgroundImage: `url(${homeBG})`}}>
            <div className={style.appWrap}>
                {homeSlider}
                <button className={style.pres_button}>Наша презентация</button>
                <Paginator color="white"/>
            </div>
        </div>
    )
};
const mapStateToProps = state => ({
    homeSlider: state.home.homeSlider
});
export default connect(mapStateToProps, {})(Home)